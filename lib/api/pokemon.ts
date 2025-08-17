import axios from "axios";


const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL!;
const localBaseURL = process.env.NEXT_PUBLIC_API_LOCAL_URL!;

export const fetchPokemonData = async (useLocal = true ) => {
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
useLocal = true
) => {
  const url = useLocal ? localBaseURL : baseURL;
  const res = await axios.post(`${url}/pokemonSpeed`, formData);
  return res.data;
};
