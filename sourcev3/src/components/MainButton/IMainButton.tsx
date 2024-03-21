import { ReactElement } from "react";

export type StaticImageImported = {
  src: string;
  width: number;
  height: number;
};

export interface IMainButton {
  text: string;
  image: StaticImageImported;
  onClick?: () => void;
}
