// "use client";

// import React, { useEffect, useState } from "react";
// import { collection, getDocs, query } from "firebase/firestore";
// import { db } from "@/firebase";

// type Pokemon = {
//   id: string;
//   forte: string;
//   food: string[];
//   foodA: string;
//   foodB: string;
//   foodC: string;
//   name: string;
//   number: string;
//   skill: string;
//   sleepType: string;
//   time: number;
//   type: string;
// };

// const Page = () => {
//   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true); // ロード中かどうかの状態

//   // データベースから取得
//   useEffect(() => {
//     const fetchPokemon = async () => {
//       const pokemonRef = collection(db, "Pokemon");
//       const q = query(pokemonRef);
//       try {
//         const snapshot = await getDocs(q);
//         const pokemonsData: Pokemon[] = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           forte: doc.data().forte,
//           food: doc.data().food,
//           foodA: doc.data().foodA,
//           foodB: doc.data().foodB,
//           foodC: doc.data().foodC,
//           name: doc.data().name,
//           number: doc.data().number,
//           skill: doc.data().skill,
//           sleepType: doc.data().sleepType,
//           time: doc.data().time,
//           type: doc.data().type,
//         }));
//         console.log(pokemonsData);
//         setPokemons(pokemonsData);
//       } catch (error) {
//         console.error("Error fetching schools:", error);
//       } finally {
//         setIsLoading(false); // データ取得後にロード完了
//       }
//     };
//     fetchPokemon();
//   }, []);

//   return <div className=" pt-24"></div>;
// };

// export default Page;
