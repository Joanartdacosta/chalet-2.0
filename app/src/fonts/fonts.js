import { Open_Sans, Poppins, Quicksand, Ropa_Sans } from "next/font/google";

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-opensans",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-poppins",
});

export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-quicksand",
});

export const ropaSans = Ropa_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ropasans",
});
