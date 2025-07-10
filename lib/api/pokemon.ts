import axios from "axios";

const baseURL = "https://pokemon-sleep-api-1059650888282.asia-northeast1.run.app";

export const fetchPokemonData = async () => {
  const res = await axios.get(`${baseURL}/pokemonName`);
  return res.data.pokemonData;
};

export const calculatePokemonSpeed = async (formData: {
  pokemonName: string;
  personality: string;
  subSkill: string;
  level: number;
}) => {
  const res = await axios.post(`${baseURL}/pokemonSpeed`, formData);
  return res.data;
};
