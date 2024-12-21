"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MiddleSection = () => {
  const pathname = usePathname();

  const links = [
    { href: "/home", label: "Home" },
    { href: "/home/orders", label: "Orders" },
    { href: "/home/setup", label: "Setup" },
    { href: "/home/config", label: "Config" },
    { href: "/home/email", label: "Email Reports" },
    { href: "/home/user-profile", label: "User Profile" },
  ];

  return (
    <div className="flex flex-col h-full ml-8 mr-8 overflow-y-auto">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`p-2 rounded-md cursor-pointer ${
            pathname === link.href
              ? "text-change-semidark border-r-4 border-change-dark font-bold"
              : "hover:text-change-extraLight"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default MiddleSection;
