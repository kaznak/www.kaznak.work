import '../styles/index.css'

type MyAppArg = {
  Component: any // !!TODO!! specify precise type
  pageProps: Record<string, any>
}

export const MyApp = ({ Component, pageProps }: MyAppArg) => {
  return <Component {...pageProps} />
}

export default MyApp
