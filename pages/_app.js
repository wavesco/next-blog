import '../styles/globals.css';
import { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes"

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      )  
}