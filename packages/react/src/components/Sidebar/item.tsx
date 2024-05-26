import { ComponentProps } from 'react'
import { Item as StyledItem } from './styles'

export interface IItem extends ComponentProps<typeof StyledItem> {}

export const Item = ({ children, ...rest }: IItem) => {
  return (
    <StyledItem data-selected={`${!!rest.selected}`} {...rest}>
      {children}
    </StyledItem>
  )
}
