"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface ShortcutContextType {
  isCtrlQPressed: boolean;
  isCtrlTPressed: boolean;
  isCtrlHPressed: boolean;
}

const ShortcutContext = createContext<ShortcutContextType | undefined>(
  undefined
);

export function ShortcutProvider({ children }: { children: React.ReactNode }) {
  const [isCtrlQPressed, setIsCtrlQPressed] = useState(false);
  const [isCtrlTPressed, setIsCtrlTPressed] = useState(false);
  const [isCtrlHPressed, setIsCtrlHPressed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey) {
        const lang = pathname.split("/")[1];
        switch (event.key.toLowerCase()) {
          case "q":
            event.preventDefault();
            setIsCtrlQPressed(true);
            router.push(`/${lang}/faq`);
            break;
          case "t":
            event.preventDefault();
            setIsCtrlTPressed(true);
            router.push(`/${lang}/tos`);
            break;
          case "h":
            event.preventDefault();
            setIsCtrlHPressed(true);
            router.push(`/${lang}`);
            break;
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "q") {
        setIsCtrlQPressed(false);
      } else if (event.key.toLowerCase() === "t") {
        setIsCtrlTPressed(false);
      } else if (event.key.toLowerCase() === "h") {
        setIsCtrlHPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [router, pathname]);

  return (
    <ShortcutContext.Provider
      value={{ isCtrlQPressed, isCtrlTPressed, isCtrlHPressed }}
    >
      {children}
    </ShortcutContext.Provider>
  );
}

export function useShortcut() {
  const context = useContext(ShortcutContext);
  if (context === undefined) {
    throw new Error("useShortcut must be used within a ShortcutProvider");
  }
  return context;
}
