"use client";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import axios from "axios";
import BeerCard from "./components/beers/BeerCard";

export default function Home() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllBeers = async () => {
      let allBeers = [];
      const responseAleBeers = await axios.get(
        "https://api.sampleapis.com/beers/ale"
      );
      const aleBeers = await responseAleBeers.data;

      const responseStoutsBeers = await axios.get(
        "https://api.sampleapis.com/beers/stouts"
      );
      const stoutsBeers = await responseStoutsBeers.data;

      const newAleBeers = aleBeers.map((beer) => ({
        ...beer,
        category: "ale",
      }));

      const updatedAlebeers = newAleBeers.map((beer) => {
        return {
          ...beer,
          beerId: beer.id,
        };
      });
      const newStoutsBeers = stoutsBeers.map((beer) => ({
        ...beer,
        category: "stouts",
      }));

      const updatedStoutBeers = newStoutsBeers.map((beer) => {
        return {
          ...beer,
          beerId: beer.id,
        };
      });

      allBeers = [...updatedAlebeers, ...updatedStoutBeers];

      const newAllBeers = allBeers.map((beer, index) => ({
        ...beer,
        id: index + 1,
      }));

      setBeers(newAllBeers);
      setLoading(false);
    };
    getAllBeers();
  }, []);

  const test = () => {
    console.log(beers);
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-3xl lg:text-5xl dark:text-white font-bold">
        ALL BEERS
      </h1>
      <div>
        {loading ? (
          <h1 className="text-3xl lg:text-5xl  dark:text-white">Loading...</h1>
        ) : (
          <div className="grid grid-cols-4">
            {beers.map((beer) => (
              <BeerCard
                key={beer.id}
                image={beer.image}
                name={beer.name}
                price={beer.price}
                rating={beer.rating.average}
                reviews={beer.rating.reviews}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
