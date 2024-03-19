"use client";

import BeerCard from "@/app/components/beers/BeerCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PaginationButtons from "@/app/components/shared/PaginateButtons";

export default function StoutPage() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [beersPerPage] = useState(10);

  useEffect(() => {
    const getBeer = async () => {
      const beerResponse = await axios.get(
        "https://api.sampleapis.com/beers/stouts"
      );
      const stoutsBeers = await beerResponse.data;
      setBeers(stoutsBeers);
      setLoading(false);
    };

    getBeer();
  }, []);

  const lastBeer = currentPage * beersPerPage;
  const firstBeer = lastBeer - beersPerPage;

  const currentBeers = beers.slice(firstBeer, lastBeer);

  const beerVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const setPage = (page) => {
    setCurrentPage(page)
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-10">
      <h1 className="text-3xl lg:text-5xl dark:text-white font-bold">
        {" "}
        Stouts BEERS
      </h1>
      {loading ? (
        <h1 className="text-3xl lg:text-5xl dark:text-white font-bold mt-10">
          Loading...
        </h1>
      ) : (
        <div className="flex flex-col items-center m-3">
          <motion.div
            variants={beerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 items-center"
          >
            {currentBeers.map((beer) => (
              <BeerCard
                key={beer.id}
                id={beer.id}
                category="stouts"
                image={beer.image}
                name={beer.name}
                price={beer.price}
                rating={beer.rating.average}
                reviews={beer.rating.reviews}
              />
            ))}
          </motion.div>
          <PaginationButtons
            pageCount={Math.ceil(beers.length / beersPerPage)}
            gotoPage={setPage}
          />
        </div>
      )}
    </main>
  );
}
