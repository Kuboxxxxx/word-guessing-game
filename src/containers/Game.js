import { useState } from "react";
import { Keyboard } from "../components/Keyboard";
import { Strikes } from "../components/Strikes";
import { Word } from "../components/Word";
import { getMaskedCharacters } from "../utils/getMaskedCharacters";
import { getRandomWord } from "../utils/getRandomWord";

export const Game = ({ category }) => {
  const randomWord = getRandomWord(category);
  const maskedCharacters = getMaskedCharacters(randomWord);
  const maxStrikes = 5;

  const [word, setWord] = useState(randomWord);
  const [characters, setCharacters] = useState(maskedCharacters);
  const [strikes, setStrikes] = useState(maxStrikes);
  //Get random word form array

  const handleCheck = (letter) => {
    const letterToCheck = letter.toUpperCase();

    const existsInWord = word.includes(letterToCheck);

    if (!existsInWord) {
      setStrikes((strikes) => strikes - 1);
    } else {
      console.log("yes");
    }
  };

  return (
    <section>
      <Strikes strikes={strikes} maxStrikes={maxStrikes} />
      <Word characters={characters} />
      <Keyboard handleCheck={handleCheck} />
    </section>
  );
};
