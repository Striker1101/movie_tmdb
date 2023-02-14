"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Category from "./Category";
export default function Hamburger() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" md:hidden justify-center items-center  ">
      <div
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? (
          <Image
            src="/images/close.svg"
            height={40}
            width={40}
            alt="menu open"
          />
        ) : (
          <Image
            src="/images/menu.svg"
            height={40}
            width={40}
            alt="menu open"
          />
        )}
      </div>
      <div>
        {toggle && (
          <ul>
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/about"}>
              <li>About</li>
            </Link>
            <li>
              <Category toggle={false} />
            </li>
            <Link href={"/log-in"}>
              <li>log in</li>
            </Link>
            <Link href={"/log-out"}>
              <li>Sign up</li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
}
