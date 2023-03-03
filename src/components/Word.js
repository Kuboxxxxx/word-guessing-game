import { Box, Typography } from "@mui/material";

export const Word = ({ charachters }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {charachters.map((charachter, index) => {
        return (
          <Typography variant="h5" key={index}>
            {charachter}
          </Typography>
        );
      })}
    </Box>
  );
};
