import { IRoundButton } from "./IRoundButton";
import "./RoundButton.css";
import Image from "next/image";

export default function RoundButton({
  image,
  onClick,
  disabled,
  cssModified,
  typeButton,
}: IRoundButton) {
  return (
    <button
      className={`button__round ${cssModified} ${typeButton}`}
      onClick={onClick}
      disabled={disabled}
    >
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
