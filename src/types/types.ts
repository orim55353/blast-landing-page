import { StaticImageData } from "next/image";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "sm" | "lg";
  disableIcon?: boolean;
}

export interface cardData {
  title: string;
  text: string;
  imageUrl: StaticImageData;
  buttonLink: string;
}
