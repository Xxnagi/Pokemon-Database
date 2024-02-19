"use client";
import { getPokemonDetail, imgurl } from "../config/api";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Chip } from "@material-tailwind/react";
import { typeColor } from "./util/TypeColor";

const PokemonCard = ({ pokemon, name, id }) => {
  const [detail, setDetail] = useState(null);
  const [typename, setTypename] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPokemonDetail(name);
      setDetail(response);
    };

    fetchData();
  }, [name]);

  useEffect(() => {
    if (detail) {
      const typeNames = detail.types.map((typeObject) => typeObject.type.name);
      setTypename(typeNames);
    }
  }, [detail]);

  return (
    <>
      <div className="relative hover:shadow-2xl hover:transition-all  flex flex-col p-2  text-gray-700 bg-white shadow-md bg-clip-border rounded-xl md:w-52 w-42">
        <div className="relative h-28  overflow-hidden text-white shadow-lg bg-clip-border rounded-lg bg-blue-gray-500 shadow-blue-gray-500/40">
          <Image
            src={`${imgurl}${id}.png`}
            width={120}
            height={120}
            className="mx-auto"
            alt="Pokemon"
          />
        </div>
        <div className="py-4 px-1">
          <h5 className="block mb-2 font-mono sm:text-xl text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h5>
          <div className="flex gap-2 text-center">
            {typename.map((type, i) => (
              <Chip
                value={type}
                size="sm"
                color={typeColor(type)}
                key={i}
                className="text-xs"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
