import React, { useState } from "react";

const AddMovie = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation simple
    if (!title.trim() || !posterURL.trim()) {
      alert("Title and Image URL are required!");
      return;
    }

    const numericRating = Number(rating);
    if (numericRating < 0 || numericRating > 10 || isNaN(numericRating)) {
      alert("Rating must be between 0 and 10.");
      return;
    }

    const newMovie = {
      title: title.trim(),
      description: description.trim(),
      posterURL: posterURL.trim(),
      rating: numericRating,
    };

    onAdd(newMovie);

    // Reset form
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: 20,
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="🎬 Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
        required
      />
      <input
        type="text"
        placeholder="📝 Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="🖼️ Image URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        style={inputStyle}
        required
      />
      <input
        type="number"
        placeholder="⭐ Rating (0–10)"
        min="0"
        max="10"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={{ ...inputStyle, width: "120px" }}
        required
      />
      <button type="submit" style={buttonStyle}>
        ➕ Add Movie
      </button>
    </form>
  );
};

// --- Styles ---
const inputStyle = {
  padding: "8px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px",
  flex: "1",
  minWidth: "150px",
};

const buttonStyle = {
  padding: "8px 12px",
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

export default AddMovie;
