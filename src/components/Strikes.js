import { Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const Strikes = ({ strikes, maxStrikes }) => {
  const strikesArray = new Array(maxStrikes).fill(<FavoriteIcon />);

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
      {strikesArray.map((_, index) =>
        index < strikes ? <FavoriteIcon /> : <FavoriteBorderIcon />
      )}
    </Box>
  );
};
