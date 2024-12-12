import dynamic from "next/dynamic";
const Onboarding = dynamic(() => import("./_private/onboarding"));

export default function Home() {
  return <Onboarding />;
}
