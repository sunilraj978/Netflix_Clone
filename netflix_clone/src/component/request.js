const API_KEY = "44a2ab6a7f6f1ca7c193ed1da25e160c";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflix: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRate: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  Action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  Comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  Horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  Romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  Documentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default request;
