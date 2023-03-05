import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '@/components/themeProvider';
import { Provider } from 'react-redux';
import { store } from '@/store/store';


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {

  //@ts-ignore
  const getLayout = Component.getLayout || (page => page)


  return (
    <Provider store={store}>
      <ThemeContextProvider>

        {getLayout(
          <Component {...pageProps}></Component>
        )}


      </ThemeContextProvider>
    </Provider>


  );




}