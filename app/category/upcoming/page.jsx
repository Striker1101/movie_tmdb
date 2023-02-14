import Movies from "../../Movies";
export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.MOVIE_API}&language=en-US&page=1`
  );

  const res = await data.json();

  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => {
          return (
            <Movies
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          );
        })}
      </div>
    </main>
  );
}
