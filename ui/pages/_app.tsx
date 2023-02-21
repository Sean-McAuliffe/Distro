import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '@/components/themeProvider';
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {

  //@ts-ignore
  const getLayout = Component.getLayout || (page => page)


  return (
    <ThemeContextProvider>

      {getLayout(
        <Component {...pageProps}></Component>
      )}


    </ThemeContextProvider>


  );




}