import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const res = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json()
    console.log(res);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return <h1>디테일</h1>
}

export default Detail;