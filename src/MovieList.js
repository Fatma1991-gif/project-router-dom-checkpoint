import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const movies = [
  {
    id: 1,
    title: "Life of Pi",
    description:
      "A young man who survives a shipwreck at sea is swept away on an epic journey of adventure and discovery. While cast away, he forms an unexpected bond with a fellow survivor: a fearsome Bengal tiger.",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDqHYfDWMlucBJsZ7zXcfJbl3nL9YqtKJNQ&s",
    rating: 8,
    trailer: "https://www.youtube.com/watch?v=3mMN693-F3U",
  },
  {
    id: 2,
    title: "Jumanji",
    description:
      "Four teenagers are sucked into a magical video game, and the only way to escape is to work together to beat the game.",
    posterURL:
      "https://upload.wikimedia.org/wikipedia/en/d/dc/Jumanji_Welcome_to_the_Jungle.png",
    rating: 6,
    trailer: "https://www.youtube.com/watch?v=2QKg5SZ_35I",
  },
];

const MovieList = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 fw-bold text-primary">🎬 Liste des Films</h1>

      <div className="row justify-content-center">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-4 col-sm-6 mb-4">
            <div
              className="card shadow-lg border-0 h-100"
              style={{ borderRadius: "15px", overflow: "hidden" }}
            >
              <img
                src={movie.posterURL}
                alt={movie.title}
                className="card-img-top"
                style={{
                  height: "350px",
                  objectFit: "cover",
                  transition: "transform 0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{movie.title}</h5>
                <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
                  ⭐ {movie.rating} / 10
                </p>
                <Link to={`/movie/${movie.id}`}>
                  <button className="btn btn-outline-primary btn-sm mt-2">
                    Voir Détails
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
