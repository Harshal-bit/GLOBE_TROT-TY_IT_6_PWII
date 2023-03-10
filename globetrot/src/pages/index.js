import Head from "next/head";
import Image from "next/image";

import { Inter } from "@next/font/google";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";


import { Fragment, useState } from "react";
import SmallCard from "../components/SmallCard/SmallCard";

const inter = Inter({ subsets: ["latin"] });


  
  export default function Home({ exploreData }) {
    const [showModal,setShowModal]=useState(false);
    
  return (
    <>
      <Head>
        <title>GlobeTrot</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull some data from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {exploreData?.map((item) => (
              <SmallCard
                key={item.id}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}

          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

        </section>
      </main>

    </>
  );
}

export async function getStaticProps() {
  //const res = await fetch('http://localhost:4000/smallTile');

  const res = await fetch("http://localhost:4000/smallTile");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      exploreData: data,
    },
  };
}

