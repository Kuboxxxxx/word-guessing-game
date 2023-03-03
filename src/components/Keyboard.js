import Box from "@mui/material/Box";
import { KeyboardButton } from "./KeyboardButton";

export const Keyboard = ({ handleCheck }) => {
  const letters = "qwrtypsdfghjklzxcvbnm";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        p: 4,
        my: 4,
      }}
    >
      {letters.split("").map((letter) => (
        <KeyboardButton
          letter={letter}
          key={letter}
          handleCheck={handleCheck}
        />
      ))}
    </Box>
  );
};
