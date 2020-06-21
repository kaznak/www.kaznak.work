import { AppProps as OrigAppProps } from 'next/app'
import { NextComponentType, NextPageContext } from 'next/types/index'

export declare type AppProps<P = {}> = OrigAppProps<P> & {
  Component: NextComponentType<NextPageContext, any, P> & {
    isMDXComponent: boolean
  }
}
