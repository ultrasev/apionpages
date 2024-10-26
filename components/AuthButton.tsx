import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import { useParams } from "next/navigation";

const Profile = (
  user: {
    user_metadata: { full_name: string };
    email: string;
  } = { user_metadata: { full_name: "" }, email: "" }
) => {
  const params = useParams();
  const lang = params?.lang || "en";

  return (
    <Link
      href={`/${lang}/profile`}
      className="py-2 px-3 flex rounded-md bg-btn-background hover:bg-btn-background-hover"
    >
      <span className="text-lg text-blue-800 dark:text-blue-100">
        {user.user_metadata?.full_name || user.email}
      </span>
    </Link>
  );
};

const AuthButton = () => {
  const { user } = useAuth() as { user: any; loading: boolean };
  return user ? <Profile {...user} /> : null;
};

export default AuthButton;
