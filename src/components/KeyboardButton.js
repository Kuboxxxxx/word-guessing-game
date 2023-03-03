import { Button } from "@mui/material";
import { useState } from "react";

export const KeyboardButton = ({ letter, handleClick }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleButtonClick = () => {
    setIsDisabled(true);

    handleClick(letter);
  };

  return (
    <Button
      variant="outlined"
      sx={{ m: 1 }}
      key={letter}
      disabled={isDisabled}
      onClick={handleButtonClick}
    >
      {letter}
    </Button>
  );
};
