"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {

  const variants = {
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

  const handleAle = () => {

  }

  const handleStout = () => {

  }

  return (
    <main className="flex min-h-screen flex-col items-center pt-10">
      <h1 className="text-3xl lg:text-5xl dark:text-gray-200 font-bold">BEERS</h1>
      <div>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row justify-center items-center mt-52 gap-6 "
        >
          <Link href="/beers/ale" className="bg-lime-300 w-64 h-32 flex items-center justify-center text-white-700 text-3xl font-mono font-bold rounded-full bg-opacity-70 hover:bg-opacity-100 hover:text-gray-800">Ale Beers</Link>
          <Link href="/beers/stout" className="bg-orange-900 w-64 h-32 flex justify-center items-center text-yellow-300 text-3xl font-mono font-bold rounded-full hover:bg-amber-200 hover:text-gray-800">Stouts Beers</Link>
        </motion.div>
      </div>
    </main>
  );
}
