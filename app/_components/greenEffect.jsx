export default function GreenEffect() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at top left, #00864e  1%, transparent 30%)",
        opacity: 0.5,
      }}
    />
  );
}
