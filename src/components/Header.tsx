import LogoFDDev from "./LogoFDDev";
import NavTabs, { MobileNav } from "./NavTabs";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
      <LogoFDDev />
      <NavTabs />
      <MobileNav />
    </header>
  );
}
