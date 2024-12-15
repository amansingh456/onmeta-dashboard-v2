// import Link from "next/link";

// const MiddleSection = () => {
//   return (
//     <div className="flex flex-col h-full ml-8 mr-8 overflow-y-auto ">
//       <Link href="/home" className="p-2 hover:text-change-semidark rounded-md ">
//         Home
//       </Link>
//       <Link
//         href="/home/orders"
//         className="p-2 hover:text-change-semidarkrounded-md cursor-pointer"
//       >
//         Orders
//       </Link>
//       <Link
//         href="/home/setup"
//         className="p-2 hover:text-change-semidark rounded-md cursor-pointer"
//       >
//         Setup
//       </Link>
//       <Link
//         href="/home/config"
//         className="p-2 hover:text-change-semidarkrounded-md cursor-pointer"
//       >
//         Config
//       </Link>
//       <Link
//         href="/home/email-reports"
//         className="p-2 hover:text-change-semidark rounded-md cursor-pointer"
//       >
//         Email Reports
//       </Link>
//       <Link
//         href="/home/user-profile"
//         className="p-2 hover:text-change-semidark rounded-md cursor-pointer"
//       >
//         User Profile
//       </Link>
//     </div>
//   );
// };

// export default MiddleSection;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MiddleSection = () => {
  const pathname = usePathname();

  const links = [
    { href: "/home", label: "Home" },
    { href: "/home/orders", label: "Orders" },
    // { href: "/home/setup", label: "Setup" },
    // { href: "/home/config", label: "Config" },
    // { href: "/home/email-reports", label: "Email Reports" },
    // { href: "/home/user-profile", label: "User Profile" },
  ];

  return (
    <div className="flex flex-col h-full ml-8 mr-8 overflow-y-auto">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`p-2 rounded-md cursor-pointer ${
            pathname === link.href
              ? "text-change-semidark border-r-4 border-change-dark"
              : "hover:text-change-dark"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default MiddleSection;
