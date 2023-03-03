import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export const Category = ({ handleCategoryClick }) => {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom="true"
      >
        Choose category
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            onClick={handleCategoryClick}
            name="Movies"
            variant="contained"
            size="large"
            fullWidth
          >
            Movies
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={handleCategoryClick}
            name="Sports"
            variant="contained"
            size="large"
            fullWidth
          >
            Sports
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={handleCategoryClick}
            name="Places"
            variant="contained"
            size="large"
            fullWidth
          >
            Places
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={handleCategoryClick}
            name="Random"
            variant="contained"
            size="large"
            fullWidth
          >
            Random
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
