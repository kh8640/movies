import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json();
    setMovies(res.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies()
  }, []);

  return (
    <div>
      {loading ?
        <h1>로딩중</h1>
        :
        <div>
          {movies.map(v =>
            <Movie
              id={v.id}
              coverImg={v.medium_cover_image}
              title={v.title}
              summary={v.summary}
              genres={v.genres}
            />
          )}
        </div>
      }
    </div>
  );
}

export default Home;
