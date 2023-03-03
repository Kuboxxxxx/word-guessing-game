import { Box } from "@mui/material";
import { KeyboardButton } from "./KeyboardButton";

export const Keyboard = ({ handleCheck }) => {
  const letters = "qwertyuiopasdfghjklzxcvbnm";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        p: "4",
        my: "4",
        color: "#ff0000",
      }}
    >
      {letters.split("").map((letter) => {
        <KeyboardButton letter={letter} handleCheck={handleCheck} />;
      })}
    </Box>
  );
};
