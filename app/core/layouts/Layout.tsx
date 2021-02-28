import { ReactNode } from "react"
import { Head } from "blitz"
import { useRouter } from "next/router"

import { siteUrlOrigin } from "app/core/lib/constants"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>{title || "www.kaznak.work"}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={siteUrlOrigin + router.pathname} />
      </Head>

      {children}
    </>
  )
}

export default Layout
