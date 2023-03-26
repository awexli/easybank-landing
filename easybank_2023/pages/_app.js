import '@/styles/globals.css';

import { Public_Sans } from '@next/font/google';

const sans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${sans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
