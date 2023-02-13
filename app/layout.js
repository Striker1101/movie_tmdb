import "./globals.css";
import { Montserrat } from "@next/font/google";

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
      <body className={`${montserrat.className} mx-30 my-12`}>
        <nav className="flex my-5 justify-evenly">
          <h2>LOGO</h2>
          <button>Search</button>
          {/* apply to child tag  */}
          <ul className="font-montserrat flex justify-center gap-3">
            <li>Home</li>
            <li>About</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
