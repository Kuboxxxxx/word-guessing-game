const maskCharacters = (character) => {
  if (character === "A") {
    return "A";
  } else if (character === "E") {
    return "E";
  } else if (character === "I") {
    return "I";
  } else if (character === "O") {
    return "O";
  } else if (character === "U") {
    return "U";
  } else {
    return "_";
  }
};

export const getMaskedCharacters = (word) => {
  const characters = word.split("");
  return characters.map(maskCharacters);
};
