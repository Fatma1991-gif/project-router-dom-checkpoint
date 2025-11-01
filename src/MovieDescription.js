import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Life of Pi",
    description:
      "A young man who survives a shipwreck at sea is swept away on an epic journey of adventure and discovery.While cast away, he forms an unexpected bond with a fellow survivor:a fearsome Bengal tiger.",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDqHYfDWMlucBJsZ7zXcfJbl3nL9YqtKJNQ&s",
    rating: 8,
    trailer: "https://www.youtube.com/watch?v=3mMN693-F3U",
  },
  {
    id: 2,
    title: "Jumanji: Welcome to the Jungle",
    description:
      "Four teenagers are sucked into a magical video game, and the only way to escape is to work together to beat the game.",
    posterURL:
      "https://upload.wikimedia.org/wikipedia/en/d/dc/Jumanji_Welcome_to_the_Jungle.png",
    rating: 6,
    trailer: "https://www.youtube.com/watch?v=2QKg5SZ_35I",
  },
];

const MovieDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Film introuvable</h2>;

  const embedUrl = movie.trailer.replace("watch?v=", "embed/");

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>{movie.title}</h1>
      <p style={{ width: "60%", margin: "0 auto" }}>{movie.description}</p>
      <iframe
        width="700"
        height="400"
        src={embedUrl}
        title="Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        ⬅ Retour à la liste
      </button>
    </div>
  );
};

export default MovieDescription;
