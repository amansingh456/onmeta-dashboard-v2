import { redirect } from "next/navigation";
import { parseCookies } from "nookies";
import dynamic from "next/dynamic";

const AuthComponent = dynamic(() => import("./components/AuthComponent"));

export default function AuthPage() {
  const cookies = parseCookies();
  const isLoggedIn = cookies.isLoggedIn;

  // If user is logged in, redirect to home page
  if (isLoggedIn) {
    redirect("/home");
  }

  return <AuthComponent />;
}
