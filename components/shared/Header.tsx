import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently logo"
            width={128}
            height={38}
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Link
              href="/sign-in"
              className={cn(buttonVariants({
                size: "lg",
                className: "rounded-full",
              }))}
            >
              Login
            </Link>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
