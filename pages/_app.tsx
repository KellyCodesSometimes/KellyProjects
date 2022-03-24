import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Html, Head, Main, NextScript } from 'next/document'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps}/>
  )
}

export default MyApp
