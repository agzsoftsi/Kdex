import LoadScreen from "../LoadScreen/LoadScreen";
import "./Display.css";
import Image from "next/image";

export default function Display() {
  return (
    <div className="display__container">
      <LoadScreen />
    </div>
  );
}
