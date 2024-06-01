import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "../ui/button";

export default function Header() {
  const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Resume Templates",
      url: "/resume-templates",
    },
  ];
  return (
    <header className="flex justify-between items-center p-6">
      <h4 className="font-semibold">MV- Resume Builder</h4>
      <nav className="flex items-center gap-10">
        <ul className="flex items-center gap-10">
          {navItems.map(({ title, url }, index) => {
            return (
              <li>
                <Link href={`${url}`} className="text-sm">
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex gap-6 items-center">
          <SignedOut>
            <Button asChild variant={"outline"}>
              <Link href={"/sign-up"}>Create an Account</Link>
            </Button>
            <Button asChild>
              <Link href={"/sign-in"}>Log In</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center justify-center gap-6">
              <Button asChild>
                <Link href={"/resume-information"}>Fill Information</Link>
              </Button>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
