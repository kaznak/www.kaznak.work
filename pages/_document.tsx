import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

import Canonical from '../components/head/canonical'
import Icons from '../components/head/icons'

let pathname

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    pathname = ctx.pathname
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <Canonical pathname={pathname} />
          <Icons />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.9.0/themes/prism-tomorrow.min.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
