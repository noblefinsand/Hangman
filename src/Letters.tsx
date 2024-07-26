import { useEffect, useState } from "react";
import styles from "./Letters.module.css";

interface DrawingProps {
  setShowRope: React.Dispatch<React.SetStateAction<boolean>>;
  setShowHead: React.Dispatch<React.SetStateAction<boolean>>;
  setShowBody: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLeftArm: React.Dispatch<React.SetStateAction<boolean>>;
  setShowRightArm: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLeftLeg: React.Dispatch<React.SetStateAction<boolean>>;
  setShowRightLeg: React.Dispatch<React.SetStateAction<boolean>>;
}

const Letters: React.FC<DrawingProps> = ({
  setShowRope,
  setShowHead,
  setShowBody,
  setShowLeftArm,
  setShowRightArm,
  setShowLeftLeg,
  setShowRightLeg,
}) => {
  const [guessedLetter, setGuessedLetter] = useState<string>("");
  const [incorrectGuesses, setIncorrectGuesses] = useState<string[]>([]);
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);
  const [randomWord, setRandomWord] = useState<string[]>([]);
  const [attempts, setAttempts] = useState<number>(7);
  const wordList: string[] = ["rigged"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuessedLetter(e.target.value.toLowerCase());
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateLetters();
    setGuessedLetter("");
  };

  //Generates new random word on page load
  useEffect(() => {
    const newRandomWord =
      wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();
    setRandomWord(newRandomWord.split(""));
  }, []);

  const randomWordLetters = () => {
    return randomWord.map(
      (item, index): JSX.Element => (
        <div
          key={index}
          style={{
            borderBottom: "2px solid black",
            width: "25px",
            textAlign: "center",
            fontSize: "25px",
            height: "25px",
            paddingBottom: "5px",
          }}
        >
          {correctGuesses.includes(item.toLowerCase())
            ? item.toUpperCase()
            : ""}
        </div>
      )
    );
  };

  //Dynamically creates an alphabet keyboard to display
  const createAlphaLetters = () => {
    const alphabet: string[] = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    return alphabet.map(
      (item): JSX.Element => (
        <div
          key={item}
          style={{
            backgroundColor: correctGuesses.includes(item.toLowerCase())
              ? "Green"
              : incorrectGuesses.includes(item.toLowerCase())
              ? "Red"
              : "transparent",
          }}
        >
          {item}
        </div>
      )
    );
  };

  const updateLetters = () => {
    if (attempts > 0) {
      if (randomWord.includes(guessedLetter)) {
        setCorrectGuesses((prev) => [...prev, guessedLetter]);
      } else {
        setIncorrectGuesses((prev) => [...prev, guessedLetter]);

        switch (attempts) {
          case 7:
            setAttempts(attempts - 1);
            setShowRope(true);
            break;
          case 6:
            setAttempts(attempts - 1);
            setShowHead(true);
            break;
          case 5:
            setAttempts(attempts - 1);
            setShowBody(true);
            break;
          case 4:
            setAttempts(attempts - 1);
            setShowLeftArm(true);
            break;
          case 3:
            setAttempts(attempts - 1);
            setShowRightArm(true);
            break;
          case 2:
            setAttempts(attempts - 1);
            setShowLeftLeg(true);
            break;
          case 1:
            setAttempts(attempts - 1);
            setShowRightLeg(true);
            break;
        }
      }
    } else {
      alert("No Attempts left");
    }
  };

  return (
    <>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: "50px",
          gap: "35px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {randomWordLetters()}
        </div>
        <form id="guess" onSubmit={handleFormSubmit}>
          <input
            maxLength={1}
            required
            value={guessedLetter}
            onChange={handleChange}
            style={{ width: "250px", height: "30px" }}
            aria-label="Search Box for Letter Guess"
          ></input>
          <button
            style={{
              height: "30px",
              borderRadius: "0%",
              marginLeft: "5px",
              backgroundColor: "orange",
            }}
          >
            Guess
          </button>
        </form>
        <div
          style={{
            width: "50%",
            border: "2px solid black",
            margin: "auto",
            flexDirection: "row",
          }}
          className={styles.flex_container}
        >
          {createAlphaLetters()}
        </div>
      </div>
    </>
  );
};
export default Letters;
