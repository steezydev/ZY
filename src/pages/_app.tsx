import { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/markdown.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
