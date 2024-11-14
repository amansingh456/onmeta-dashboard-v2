import AuthComponent from "./components/AuthComponent";

export default function AuthPage() {
  const user =
    typeof window !== "undefined" ? localStorage.getItem("isLoggedIn") : null;

  // If user is logged in, redirect to home page
  if (user) {
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
    return null; // Return null while redirecting
  }

  return <AuthComponent />;
}
