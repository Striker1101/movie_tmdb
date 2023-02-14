"use client";

import { useState } from "react";
import Link from "next/link";
export default function Category({ toggle }) {
  const Lists = ["upcoming", "topRated", "latest"];
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        className="cursor-pointer"
        onClick={() => {
          setShow(!show);
        }}
      >
        Category
      </div>
      <div className="relative">
        {show && (
          <div>
            {toggle ? (
              <ul className="relative">
                {Lists.map((list, i) => {
                  return (
                    <Link key={i} href={`/category/${list}`}>
                      <li>{list}</li>
                    </Link>
                  );
                })}
              </ul>
            ) : (
              <ul className="absolute right-20 bottom-5">
                {Lists.map((list, i) => {
                  return (
                    <Link key={i} href={`/category/${list}`}>
                      <li>{list}</li>
                    </Link>
                  );
                })}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
