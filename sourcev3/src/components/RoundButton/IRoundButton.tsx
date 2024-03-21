import { ReactElement } from "react";

export type StaticImageImported = {
  src: string;
  width: number;
  height: number;
};

export interface IRoundButton {
  image: StaticImageImported;
  onClick?: () => void;
}
