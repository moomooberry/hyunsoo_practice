import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store/index";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ReduxProvider>
  );
}
