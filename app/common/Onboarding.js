"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const WelcomeAnimations = dynamic(() => import("./WelcomeAnimations"));

export default function Onboarding() {
  const router = useRouter();

  const letters = "ONMETA".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/auth");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return <WelcomeAnimations letters={letters} />;
}
