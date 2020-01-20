import { StaticKitProvider } from "@statickit/react";

function App({ Component, pageProps }) {
  return (
    <StaticKitProvider site="c7cf79156606">
      <Component {...pageProps} />
    </StaticKitProvider>
  );
}

export default App;
