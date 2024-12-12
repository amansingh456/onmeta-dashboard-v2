import { redirect } from "next/navigation";
import { parseCookies } from "nookies";
import dynamic from "next/dynamic";

const AppLayout = dynamic(() => import("./components/AppLayout.js"));

export default function AuthPage() {
  const cookies = parseCookies();
  const isLoggedIn = cookies.isLoggedIn;

  // If user is logged in, redirect to home page
  if (!isLoggedIn) {
    redirect("/auth");
  }

  return <AppLayout />;
}
