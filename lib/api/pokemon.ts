import axios from "axios";


const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL!;
const localBaseURL = process.env.NEXT_PUBLIC_API_LOCAL_URL!;

// const baseURL = "https://pokemon-sleep-api-1059650888282.asia-northeast1.run.app"
// const localBaseURL = "http://0.0.0.0:8080"

export const fetchPokemonData = async (useLocal = false ) => {
  const url = useLocal ? localBaseURL : baseURL;
  const res = await axios.get(`${url}/pokemonName`);
  return res.data.pokemonData;
};

export const calculatePokemonSpeed = async (formData: {
  pokemonName: string;
  personality: string;
  subSkill: string;
  level: number;
},
useLocal = false
) => {
  const url = useLocal ? localBaseURL : baseURL;
  const res = await axios.post(`${url}/pokemonSpeed`, formData);
  return res.data;
};
