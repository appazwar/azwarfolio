import "@azwarapp/styles/globals.css";
import type { AppProps } from "next/app";
import Wrapper from "@azwarapp/components/Wrapper";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}
