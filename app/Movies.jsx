import Image from "next/image";
import Link from "next/link";
export default function Movies({ title, id, poster_path, release_date }) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      {/*encodeURIComponent is used in the example to keep the path utf-8 compatible. */}
      <Link href={`/${encodeURIComponent(id)}`}>
        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}
        />
      </Link>
    </div>
  );
}
