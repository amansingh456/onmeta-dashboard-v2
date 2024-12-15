export default function GreenEffect({ percent }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: `radial-gradient(circle at top left, #00864e , transparent ${percent})`,
        opacity: 0.5,
        pointerEvents: "none",
      }}
    />
  );
}
