"use client";
import dynamic from "next/dynamic";

const Welcome = dynamic(() => import("./_private/welcome"));

export default function NotFoundPage() {
  const letters = "404".split("");
  const tagLine = "Oops! The page you are looking for doesn’t exist";
  const loading = false;
  return <Welcome letters={letters} tagLine={tagLine} loading={loading} />;
}
