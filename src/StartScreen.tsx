import { useState } from "react";
import Drawing from "./Drawing";

const StartScreen: React.FC = () => {
  const [start, setStart] = useState(false);

  const handleChange = () => {
    setStart(true);
  };

  if (start) {
    return <Drawing />;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          height: "100vh",
          alignItems: "center",
          backgroundColor: "gray",
        }}
      >
        <div
          style={{
            width: "50vw",
            height: "50vh",
            alignContent: "center",
            backgroundColor: "white",
          }}
        >
          <h1>Hangman Game</h1>
          <button
            style={{ width: "100px", height: "50px" }}
            onClick={handleChange}
          >
            Lets Play!
          </button>
        </div>
      </div>
    </>
  );
};

export default StartScreen;
