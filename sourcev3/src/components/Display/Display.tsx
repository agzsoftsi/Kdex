import "./Display.css";
import { IDisplay } from "./IDisplay";
import PokeCardGroup from "@/components/PokeCardGroup/PokeCardGroup";
import LoadScreen from "@/components/LoadScreen/LoadScreen";

export default function Display({ data }: IDisplay) {
  console.log(data);

  return (
    <div className="display__container">
      {data ? <PokeCardGroup data={data} /> : <LoadScreen />}
    </div>
  );
}
