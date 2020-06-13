import '../styles/index.css'

type MyAppArg = {
  Component: any
  pageProps: Record<string, any>
}

export const MyApp = ({ Component, pageProps }: MyAppArg) => {
  return <Component {...pageProps} />
}

export default MyApp
