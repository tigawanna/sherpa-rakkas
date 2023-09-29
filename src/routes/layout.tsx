import "./index.css";
import { useEffect } from "react";
import { ThemeToggle } from "@/components/navigation/Theme";
import { LayoutProps, Link, StyledLink, useLocation } from "rakkasjs";
import { Nprogress } from "@/components/navigation/nprogress/Nprogress";
import { themeChange } from "theme-change";


export default function Layout({ children }: LayoutProps) {
  const links = [
    { title: "Authentication", href: "/authentication" },
    { title: "Forms", href: "/forms" },
    { title: "Dashboard", href: "/dashboard" },
    { title: "Cards", href: "/cards" },
    { title: "Music", href: "/music" },
    { title: "Playground", href: "/playground" },
    { title: "tasks", href: "/tasks" },
  ];
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  const location = useLocation();
  return (
    <div className="w-full min-h-screen h-full flex flex-col items-center justify-center ">
      <Nprogress isAnimating={location?.pending ? true : false} />
      <header className="w-full flex gap-4 justify-between  text-primary-content bg-primary
      t  px-2 py-1 sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold">
          Home
        </Link>
        {/* <nav className="flex gap-4 px-3 ">
          {links.map((link) => (
            <StyledLink
              className="py-1 px-2"
              activeClass="text-accent"
              key={link.href}
              href={link.href}
            >
              {link.title}
            </StyledLink>
          ))}
        </nav> */}
        <ThemeToggle />
      </header>
      {children}
    </div>
  );
}
