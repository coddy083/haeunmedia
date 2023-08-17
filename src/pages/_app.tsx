import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";

library.add(fas);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
