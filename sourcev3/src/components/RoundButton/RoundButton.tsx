import { IRoundButton } from "./IRoundButton";
import "./RoundButton.css";
import Image from "next/image";

export default function RoundButton({ image, onClick }: IRoundButton) {
  return (
    <button className="button__round" onClick={onClick}>
      <Image
        src={image.src}
        alt="icon"
        width={30}
        height={30}
        className="button__round-icon"
      />
    </button>
  );
}
