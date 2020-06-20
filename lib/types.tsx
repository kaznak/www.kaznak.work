import { AppProps as OrgAppProps } from 'next/app'
import { NextComponentType, NextPageContext } from 'next/types/index'

export interface AppProps extends OrgAppProps {
  Component: NextComponentType<NextPageContext, any, {}> & {
    isMDXComponent: boolean
  }
}
