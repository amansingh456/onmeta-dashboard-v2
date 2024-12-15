import dynamic from "next/dynamic";

const AppLayout = dynamic(() => import("./components/AppLayout.js"));

export default function AuthPage() {
  return <AppLayout />;
}
