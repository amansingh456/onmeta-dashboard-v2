"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Welcome = dynamic(() => import("./welcome"));

export default function Onboarding() {
  const router = useRouter();

  const letters = "ONMETA".split("");
  const tagLine = "Connecting Real World to Crypto World";

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return <Welcome letters={letters} tagLine={tagLine} />;
}
