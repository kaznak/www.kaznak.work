import { AppProps } from '../lib/types'
import { MDXProvider } from '@mdx-js/react'

import MDXComponents from '../components/mdx'
import '../styles/index.css'

const App = (appProps: AppProps) => {
  const { Component, pageProps } = appProps
  return (
    <div className="container">
      {Component.isMDXComponent ? (
        <MDXProvider components={MDXComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  )
}

export default App
