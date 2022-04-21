const apiConfig = {
  baseUrl: "http://api.themoviedb.org/3/",
  apiKey: "bc000323d4e1f1f330998fb35396fd03",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`,
};

export default apiConfig;
