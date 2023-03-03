import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";

export const Category = ({ handleCategoryClick }) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button onClick={handleCategoryClick} name="Movies">
            Movies
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={handleCategoryClick} name="Sports">
            Sports
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={handleCategoryClick} name="Places">
            Places
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={handleCategoryClick} name="Random">
            Random
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
