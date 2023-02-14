import Image from "next/image";
export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API}&language=en-US&page=1`
  );

  const res = await data.json();
  return res.results.map((movie) => ({ movie: toString(movie.id) }));
}
export default async function MovieDetails({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.MOVIE_API}&language=en-US&page=1`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const res = await data.json();
  return (
    <div>
      <h1>Movie Detail</h1>
      <div>
        <h2 className="text-4xl">{res.title}</h2>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded">
          {res.status}
        </h2>
        <Image
          width={800}
          height={800}
          className="my-12 w-full"
          src={imagePath + res.backdrop_path}
          alt=""
          priority
        />
        <p>{res.overview}</p>
      </div>
    </div>
  );
}
