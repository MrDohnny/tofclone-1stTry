
import type { AppProps } from "next/app";
import { SectionProvider } from "src/contexts/section";
import { globalStyles } from "../styles/global";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles()}
      <SectionProvider>
        <Component {...pageProps} />
      </SectionProvider>
    </>
  );
}

export default MyApp;
