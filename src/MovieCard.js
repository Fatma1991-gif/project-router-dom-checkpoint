import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={movie.posterURL} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p>⭐ {movie.rating}</p>
        <Link to={`/movie/${movie.id}`} className="btn btn-primary">Voir Détails</Link>
      </div>
    </div>
  );
};

export default MovieCard;
