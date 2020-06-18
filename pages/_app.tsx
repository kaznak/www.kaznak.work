import * as params from '../lib/const'

import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/index.css'

export const MyApp = (page: AppProps) => {
  const { Component, router, pageProps } = page
  return (
    <>
      <Head>
        <link rel="canonical" href={params.URL_ORIGIN + router.pathname} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
