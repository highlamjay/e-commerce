import Link from "next/link";
import { usePathname } from "next/navigation";

const NavHeader = () => {
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
    { label: "Sign Up", href: "/signup" },
  ];
  return (
    <nav className="hidden md:flex gap-12 text-base text-black">
      {links.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={`pb-1 hover:text-black hover:scale-110 transition-all ${
            pathname === href ? "border-b-2 border-black font-medium" : ""
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavHeader;
