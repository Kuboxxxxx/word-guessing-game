import { Box, Container } from "@mui/material";
import { useState } from "react";
import { Banner } from "./components/Banner";
import { Category } from "./components/Category";
import { Keyboard } from "./components/Keyboard";
import { Game } from "./containers/Game";

export const App = () => {
  const [category, setCategory] = useState();

  const handleCategoryClick = ({ target }) => {
    const selectedCategory = target.name;
    setCategory(selectedCategory);
  };

  const handleReset = () => {
    setCategory();
  };

  return (
    <Box>
      <Banner handleReset={handleReset} />
      <Container maxWidth="md" sx={{ margin: "16px" }}>
        {category ? (
          <Game category={category} />
        ) : (
          <Category handleCategoryClick={handleCategoryClick} />
        )}
      </Container>
    </Box>
  );
};
