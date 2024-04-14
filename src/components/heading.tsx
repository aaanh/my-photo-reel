import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./darkmode-toggle";
import Image from "next/image";

export default function Heading() {
  return (
    <div
      className={`p-4 lg:grid lg:grid-cols-3 flex flex-col justify-center items-center space-y-4 lg:space-y-0 w-full sticky top-0 bg-background/80 backdrop-blur-2xl`}
      style={{}}
    >
      <div></div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <Link
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "flex items-center justify-center space-x-2"
          )}
          href={`/`}
        >
          <Image
            src="/static/icon.png"
            width="36"
            height="36"
            alt="Logo"
          ></Image>
          <h1>Anh&apos;s Photography</h1>
        </Link>
        <nav>
          <ul className="flex space-x-2">
            <li>
              <Link
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "flex items-center justify-center space-x-2"
                )}
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "flex items-center justify-center space-x-2"
                )}
                href={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <a
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "flex items-center justify-center space-x-2"
                )}
                href={"https://aaanh.com"}
              >
                aaanh.com
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-end items-center">
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
}
