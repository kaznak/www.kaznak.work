import * as params from '../../lib/const'

interface Props {
  pathname: string
}

export const canonical = (props: Props) => {
  const { pathname } = props
  return <link rel="canonical" href={params.URL_ORIGIN + pathname} />
}

export default canonical
