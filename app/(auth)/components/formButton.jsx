import { FiArrowRight } from "react-icons/fi";

export default function FormButton({ text, onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-full bg-text-dark text-text-light py-3 transition-colors btn-smooth flex items-center justify-center gap-2 group"
    >
      {text}
      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
    </button>
  );
}
