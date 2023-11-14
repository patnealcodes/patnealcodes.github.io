import localFont from "@next/font/local";
import clsx from "clsx";
import { AppProps } from "next/app";

import "styles/index.scss";

const dank = localFont({
  src: [
    {
      path: "../public/fonts/DankMono-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/DankMono-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/DankMono-Bold.ttf",
      style: "italics",
    },
  ],
  variable: "--font-dank",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={clsx(dank.variable, "font-sans")}>
      <Component {...pageProps} />
    </main>
  );
}
