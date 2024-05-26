import { ComponentProps } from 'react'
import { Section as StyledSection } from './styles'

export interface ISection extends ComponentProps<typeof StyledSection> {}

export const Section = ({ children, ...rest }: ISection) => {
  return <StyledSection {...rest}>{children}</StyledSection>
}
