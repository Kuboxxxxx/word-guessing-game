const randomArrayIndex = (arrayLength) => {
  return Math.round(Math.random() * (arrayLength - 1));
};

export const getRandomWord = (selectedCategory) => {
  if (selectedCategory === "Movies") {
    const movies = ["TOP GUN", "AVATAR", "SCREAM"];
    const moviesLength = movies.length;
    const moviesIndex = randomArrayIndex(moviesLength);
    return movies[moviesIndex];
  } else if (selectedCategory === "Sports") {
    const sports = ["BASEBALL", "BASKETBALL", "TENNIS"];
    const sportsLength = sports.length;
    const sportsIndex = randomArrayIndex(sportsLength);
    return sports[sportsIndex];
  } else if (selectedCategory === "Places") {
    const places = ["LONDON", "CALIFORNIA", "ROME"];
    const placesLength = places.length;
    const placesIndex = randomArrayIndex(placesLength);
    return places[placesIndex];
  } else {
    const random = ["SHE", "THINKS", "MY", "TRACTOR", "SEXY"];
    const randomLength = random.length;
    const randomIndex = randomArrayIndex(randomLength);
    return random[randomIndex];
  }
};
