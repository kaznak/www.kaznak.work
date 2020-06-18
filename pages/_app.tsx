import * as params from '../lib/const'

import Head from 'next/head'
import '../styles/index.css'

interface MyAppArg {
  Component: any // !!TODO!! specify precise type
  router: any // !!TODO!! specify precise type
  pageProps: Record<string, any>
}

export const MyApp = (page: MyAppArg) => {
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
