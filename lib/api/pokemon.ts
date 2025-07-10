import axios from "axios";

const baseURL = "https://pokemon-sleep-api-1059650888282.asia-northeast1.run.app";
// const localBaseURL = "http://0.0.0.0:9090";

export const fetchPokemonData = async () => {
  const res = await axios.get(`${baseURL}/pokemonName`);
  // const res = await axios.get(`${localBaseURL}/pokemonName`);
  return res.data.pokemonData;
};

export const calculatePokemonSpeed = async (formData: {
  pokemonName: string;
  personality: string;
  subSkill: string;
  level: number;
}) => {
  const res = await axios.post(`${baseURL}/pokemonSpeed`, formData);
  // const res = await axios.post(`${localBaseURL}/pokemonSpeed`, formData);
  return res.data;
};
