import React, { useState } from "react";

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const phrases = [
    "No",
    "Ah...sicura?",
    "Ma proprio sicura?",
    "daiiiiiiiii",
    "antipatica",
    "bah...",
  ];

  // Immagine 1: Orsetti che si coccolano (Inizio)
  const firstGif =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp6Ynd4Z3B6Z3B6Z3B6Z3B6Z3B6Z3B6Z3B6Z3B6Z3B6ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/KztT2c4u8mYYUiMKdJ/giphy.gif";

  // Immagine 2: Orsetti che si abbracciano (Dopo il SI)
  const secondGif =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMW96a2hna3h5bmt2amY1NWZkanlkMWx4Nm9xbm1ycnl4eTQ5c3FqYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IzXiddo2twMmdmU8Lv/giphy.gif";

  if (yesPressed) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#fce4ec",
          textAlign: "center",
          padding: "20px",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={secondGif}
          alt="Love"
          style={{ width: "250px", borderRadius: "15px" }}
        />
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#d81b60",
            marginTop: "20px",
          }}
        >
          E andiamoooo!! Questa sì che è la mia buba buba:) 💚 ti amoo fanculooo
        </h1>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#fff5f8",
        textAlign: "center",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <img src={firstGif} alt="Waiting" style={{ width: "250px" }} />
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "20px 0",
          color: "#333",
        }}
      >
        Ehi buba vuoi essere la mia valentina? 💚
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <button
          style={{
            backgroundColor: "#22c55e",
            color: "white",
            fontWeight: "bold",
            padding: "12px 25px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontSize: `${yesButtonSize}px`,
            transition: "0.3s",
          }}
          onClick={() => setYesPressed(true)}
        >
          Sì
        </button>
        <button
          onClick={() => setNoCount(noCount + 1)}
          style={{
            backgroundColor: "#ef4444",
            color: "white",
            fontWeight: "bold",
            padding: "12px 25px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          {phrases[Math.min(noCount, phrases.length - 1)]}
        </button>
      </div>
    </div>
  );
}
