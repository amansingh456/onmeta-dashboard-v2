export default function ErrorMessage({ error }) {
  return error ? <p className="text-red-500 mb-2 italic">{error}</p> : null;
}
