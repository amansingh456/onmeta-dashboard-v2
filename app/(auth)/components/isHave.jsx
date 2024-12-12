import Link from "next/link";

export default function IsHave({ text1, text2, routePath }) {
  return (
    <p className=" text-sm font-medium text-text-semidark">
      {text1}
      <Link
        href={routePath}
        className="text-sm font-medium text-text-dark btn-smooth transition-colors"
      >
        {text2}
      </Link>
    </p>
  );
}
