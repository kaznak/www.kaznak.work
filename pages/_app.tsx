import { AppProps } from 'next/app'
import '../styles/index.css'

export const MyApp = (page: AppProps) => {
  const { Component, pageProps } = page
  return (
    <div className="container">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
