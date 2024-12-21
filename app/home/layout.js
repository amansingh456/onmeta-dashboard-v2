import SideNav from "../_components/sideNav";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen ">
      <div className="w-1/4 md:w-1/5 ">
        <SideNav />
      </div>
      <div className="w-3/4 md:w-4/5 bg-text-light p-10 animate-fadeInGlow">
        {children}
      </div>
    </div>
  );
}
