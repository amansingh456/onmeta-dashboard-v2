import dynamic from "next/dynamic";
const Onboarding = dynamic(() => import("./_components/onboarding"));

export default function Home() {
  return <Onboarding />;
}
