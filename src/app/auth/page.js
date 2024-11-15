import AuthComponent from "./components/AuthComponent";
import { redirect } from "next/navigation";
import { parseCookies } from "nookies";

export default function AuthPage() {
  const cookies = parseCookies();
  const isLoggedIn = cookies.isLoggedIn;

  // If user is logged in, redirect to home page
  if (isLoggedIn) {
    redirect("/"); // Use Next.js redirect function
  }

  return <AuthComponent />;
}
