// context/AuthContext.tsx
"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { createClient } from "@/utils/supabase/client";
import { User, Session } from "@supabase/supabase-js";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  error: string | null;
  refreshAuth: () => Promise<void>;
  getAccessToken: () => Promise<string | null>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  const getAccessToken = useCallback(async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error("Error getting access token:", error);
      return null;
    }
    return data.session?.access_token ?? null;
  }, [supabase.auth]);

  const refreshAuth = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      setSession(data.session);
      setUser(data.session?.user ?? null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "An unknown error occurred");
      setUser(null);
      setSession(null);
    } finally {
      setLoading(false);
    }
  }, [supabase.auth]);

  const pathname = usePathname();

  useEffect(() => {
    const excludedPaths = ["/reset-password"]; // Add more paths as needed
    if (pathname && !excludedPaths.some((path) => pathname.includes(path))) {
      refreshAuth();
    } else {
      return;
    }

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [refreshAuth, supabase.auth, pathname]);

  const value = {
    user,
    session,
    loading,
    error,
    refreshAuth,
    getAccessToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
