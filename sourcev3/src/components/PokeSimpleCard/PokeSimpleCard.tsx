import "./PokeSimpleCard.css";
import Image from "next/image";
import { IPokeSimpleCard } from "./IPokeSimpleCard";
import PokeSimpleCard from "@/components/PokeCardGroup/PokeCardGroup";
import { useState } from "react";
import appText from "@/lang/langEN.json";

export default function PokeCardGroup({ pokeData, key }: IPokeSimpleCard) {
  return (
    <div className={`PokeSimpleCard__container ${pokeData.color}`}>
      <Image
        className="PokeSimpleCard__image"
        src={`/images/simple/${pokeData.sprites.front_default}`}
        alt="image"
        width={70}
        height={70}
      />
      <div className="PokeSimpleCard__title">{pokeData.name}</div>
      <div className="PokeSimpleCard__number">{pokeData.number}</div>
      <div className="PokeSimpleCard__type">{pokeData.types[0]}</div>
    </div>
  );
}
