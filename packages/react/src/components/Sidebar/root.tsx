import { ComponentProps } from 'react'
import { Root as CollapsibleRoot } from './collapsible'

export interface IRoot extends ComponentProps<typeof CollapsibleRoot> {}

export const Root = ({ children, ...rest }: IRoot) => {
  return (
    <CollapsibleRoot {...rest} defaultOpen unmountOnExit={false}>
      {children}
    </CollapsibleRoot>
  )
}
