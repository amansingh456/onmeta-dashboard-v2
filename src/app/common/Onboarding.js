"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Welcome from "./Welcome";

export default function Onboarding() {
  const [showWelcome, setShowWelcome] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      router.push("/auth");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  if (showWelcome) {
    return <Welcome />;
  }

  return null;
}
