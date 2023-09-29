import "./index.css";
import { useEffect } from "react";
import { ThemeToggle } from "@/components/navigation/Theme";
import { LayoutProps, Link, StyledLink, useLocation } from "rakkasjs";
import { Nprogress } from "@/components/navigation/nprogress/Nprogress";
import { themeChange } from "theme-change";
import { useAuthSession, useCsrf } from "@/hooks/auth/lib/auth";
import type { Session } from "@auth/core/types";


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
    const session = useAuthSession({
      refetchInterval: 15_000,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    });
    console.log(session);
  return (
    <div className="w-full min-h-screen h-full flex flex-col items-center justify-center ">
      <Nprogress isAnimating={location?.pending ? true : false} />
      <header
        className="w-full flex gap-4 justify-between  text-primary-content bg-primary
      t  px-2 py-1 sticky top-0 z-50"
      >
        <Link href="/" className="text-2xl font-bold">
          Home
        </Link>
        <StyledLink href="/guarded" activeStyle={{ fontWeight: "bold" }}>
          Guarded
        </StyledLink>

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
        {session?.user ? <LoggedIn user={session?.user} /> : <LoggedOut />}
      </header>
      {children}
    </div>
  );
}

function LoggedIn({ user }: { user: NonNullable<Session["user"]> }) {
  const { current: url } = useLocation();

  const signoutUrl = new URL("/auth/signout", url);
  signoutUrl.searchParams.set("callbackUrl", new URL("/", url).href);

  const csrf = useCsrf({
    refetchInterval: 15_000,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1em",
        justifyContent: "flex-end",
        minHeight: "3em",
      }}
    >
      <span>{user.name}</span>
      <form action={signoutUrl.href} method="post">
        <input type="hidden" name="csrfToken" value={csrf} />
        <button type="submit">Sign out</button>
      </form>
      <img
        src={user.image || undefined}
        alt={`${user.name}'s avatar`}
        width="32"
        height="32"
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}

function LoggedOut() {
  const { current: url } = useLocation();

  const signinUrl = new URL("/auth/signin", url);
  signinUrl.searchParams.set("callbackUrl", url.href);

  return <a href={signinUrl.href}>Sign in</a>;
}
