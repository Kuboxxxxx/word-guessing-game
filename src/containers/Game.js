import { useState } from "react";
import { Keyboard } from "../components/Keyboard";
import { Strikes } from "../components/Strikes";
import { Word } from "../components/Word";
import { getMaskedCharacters } from "../utils/getMaskedCharacters";
import { getRandomWord } from "../utils/getRandomWord";

export const Game = ({ category }) => {
  const [word, setWord] = useState();
  const [charachters, setCharachters] = useState([]);
  const [strikes, setStrikes] = useState();

  //Get random word form array
  const randomWord = getRandomWord(category);

  //Set random word as state
  setWord(randomWord);

  //Set characters as state
  const maskedCharacters = getMaskedCharacters(randomWord);
  setCharachters(maskedCharacters);

  const maxStrikes = 5;
  setStrikes(maxStrikes);

  console.log(category);
  console.log(word);
  console.log(charachters);

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
      <Word charachters={charachters} />
      <Keyboard handleCheck={handleCheck}/>
    </section>
  );
};
