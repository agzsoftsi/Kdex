import { IMainButton } from "./IMainButton";
import "./MainButton.css";
import Image from "next/image";

export default function MainButton({ text, image, onClick }: IMainButton) {
  return (
    <button className="button__main" onClick={onClick}>
      {text}

      <Image
        src={image.src}
        alt="icon"
        width={20}
        height={20}
        className="button__main-icon"
      />
    </button>
  );
}
