"use client";
import { useRef, useState } from "react";

export default function Search() {
  async function search() {
    if (
      text.current !== undefined &&
      text.current !== null &&
      text.current.value !== ""
    ) {
      console.log(process.env.MOVIE_API);
      const data = await fetch(
        `https://api.themoviedb.org/3/search/${text.current.value}?api_key=e54c4e2d66747e6a91716132f0f5f964&page=1`
      );
      const res = await data.json();
      console.log(res);
      return;
    }
    console.log("out");
  }
  const [toggle, setToggle] = useState(false);
  const text = useRef(undefined);
  return (
    <div>
      {toggle && (
        <input
          ref={text}
          className=" focus:border-blue-500 bg-gray-200 focus:bg-white "
          type="text"
          name="search"
          placeholder="Search any movie here"
          id="search"
        />
      )}
      <button
        onClick={() => {
          setToggle(!toggle);
          search();
        }}
        className="hover:bg-red-300 p-0.5 rounded "
        type="submit"
      >
        Search
      </button>
    </div>
  );
}
