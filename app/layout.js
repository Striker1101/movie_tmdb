import "./globals.css";
import { Montserrat } from "@next/font/google";
import Search from "./Search";
import Hamburger from "./Hamburger";
import Category from "./Category";
import Image from "next/image";
import Link from "next/link";
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <head />
      {/* pend all google font to the parent class and it would apply for each class */}
      <body className={`${montserrat.className} mx-30 my-0`}>
        <nav className="flex my-5 justify-evenly">
          <Link href={"/"}>
            <Image src="/logo.svg" height={30} width={30} alt="logo" />
          </Link>
          <Search />
          {/* apply to child tag  */}
          <ul className="sm:hidden flex font-montserrat  justify-center gap-3">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/about"}>
              <li>About</li>
            </Link>
            <li>
              <Category toggle={true} />
            </li>
            <Link href={"/log-in"}>
              <li>log in</li>
            </Link>
            <Link href={"/log-out"}>
              <li>Sign up</li>
            </Link>
          </ul>
          <Hamburger />
        </nav>
        {children}
      </body>
    </html>
  );
}
