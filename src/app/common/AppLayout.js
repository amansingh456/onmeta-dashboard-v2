import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, initializeTheme } from "@/store/slices/themeSlice";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import UserProfileBox from "./UserProfileBox";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/auth");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-200">
      <MobileNav
        isDarkMode={isDarkMode}
        toggleDarkMode={handleToggleTheme}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Sidebar isDarkMode={isDarkMode} toggleDarkMode={handleToggleTheme} />
      <main className="flex-1 relative">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-6 relative min-h-screen">
          <UserProfileBox />
          <div className="mt-16">{children}</div>
        </div>
      </main>
    </div>
  );
}
