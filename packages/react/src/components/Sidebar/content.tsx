import { ComponentProps } from 'react'
import { Content as CollapsibleContent } from './collapsible'
import { content } from './styles'

export interface IContent extends ComponentProps<typeof CollapsibleContent> {}

export const Content = ({ children, ...rest }: IContent) => {
  return (
    <CollapsibleContent {...rest} className={content}>
      {children}
    </CollapsibleContent>
  )
}
