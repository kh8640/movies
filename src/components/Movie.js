import { Link } from "react-router-dom";

function Movie({
  id,
  coverImg,
  title,
  summary,
  genres
}) {
  return (
    <div key={id}>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`movie/${id}`}>
          {title}
        </Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((v, i) =>
          <li key={i}>
            {v}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Movie;