"use client";
import { getPokemonDetail, imgurl } from "@/app/config/api";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import PokemonStat from "@/app/component/PokemonStat";
import Image from "next/image";
import Container from "@/app/component/util/Container";
import Skeleton from "@/app/component/Skeleton";
import Error from "@/app/component/Error";

const Page = ({ params }) => {
  const router = useRouter();
  const { name } = params;
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemonDetail(name);
        setPokemon(response);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);
  return (
    <>
      {loading ? (
        <Container>
          <Skeleton type="stat" />
        </Container>
      ) : (
        <>
          <Container>
            {error ? (
              <Error error={error} />
            ) : (
              <div className="p-6">
                <h1 className="text-4xl font-bold">
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white rounded-md">
                    <Image
                      src={`${imgurl}${pokemon.id}.png`}
                      width={300}
                      height={300}
                      className="mx-auto"
                      alt="Pokemon"
                    />
                  </div>
                  <PokemonStat stats={pokemon.stats} />
                </div>
              </div>
            )}
          </Container>
        </>
      )}
    </>
  );
};

export default Page;
