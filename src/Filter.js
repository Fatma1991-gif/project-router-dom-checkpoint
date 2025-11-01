// import React from "react";

// const Filter = ({ filterTitle, setFilterTitle, filterRate, setFilterRate }) => {
//   // Fonction pour gérer la saisie du titre
//   const handleTitleChange = (e) => {
//     setFilterTitle(e.target.value.trimStart()); // empêche les espaces au début
//   };

//   // Fonction pour gérer la saisie de la note
//   const handleRateChange = (e) => {
//     const value = Number(e.target.value);
//     if (value >= 0 && value <= 10) {
//       setFilterRate(value);
//     }
//   };

//   return (
//     <div
//       style={{
//         marginBottom: 20,
//         display: "flex",
//         gap: "10px",
//         alignItems: "center",
//       }}
//     >
//       <input
//         type="text"
//         placeholder="🔍 Search by title..."
//         value={filterTitle}
//         onChange={handleTitleChange}
//         style={{
//           flex: 1,
//           padding: "8px",
//           borderRadius: "8px",
//           border: "1px solid #ccc",
//           fontSize: "14px",
//         }}
//       />

//       <input
//         type="number"
//         min="0"
//         max="10"
//         placeholder="⭐ Min rating"
//         value={filterRate}
//         onChange={handleRateChange}
//         style={{
//           width: "120px",
//           padding: "8px",
//           borderRadius: "8px",
//           border: "1px solid #ccc",
//           fontSize: "14px",
//         }}
//       />

//       <button
//         onClick={() => {
//           setFilterTitle("");
//           setFilterRate("");
//         }}
//         style={{
//           padding: "8px 12px",
//           backgroundColor: "#007BFF",
//           color: "white",
//           border: "none",
//           borderRadius: "8px",
//           cursor: "pointer",
//         }}
//       >
//         Reset
//       </button>
//     </div>
//   );
// };

// export default Filter;

