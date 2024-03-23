import "./PokeCardGroup.css";
import Image from "next/image";
import { IPokeCardGroup } from "./IPokeCardGroup";
import PokeSimpleCard from "@/components/PokeSimpleCard/PokeSimpleCard";
import { useState } from "react";
import appText from "@/lang/langEN.json";

export default function PokeCardGroup({ data }: IPokeCardGroup) {
  console.log(data);

  return (
    <div className="PokeCardGroup__container">
      <div className="PokeCardGroup__title">{appText.PokeCardGroup.title}</div>
      <div className="PokeCardGroup__cards">
        {data.map((item: any, index: number) => {
          return <PokeSimpleCard pokeData={item} key={index} />;
        })}
      </div>
    </div>
  );
}
