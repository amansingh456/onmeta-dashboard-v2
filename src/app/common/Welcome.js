import WelcomeAnimations from "./animations/WelcomeAnimations";

export default function Welcome() {
  const letters = "ONMETA".split("");

  return <WelcomeAnimations letters={letters} />;
}
