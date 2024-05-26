import { ComponentProps } from 'react'
import { Column, Header as StyledHeader, Subtitle, Title } from './styles'
import { Avatar, AvatarProps } from '../Avatar'

export interface IHeader extends ComponentProps<typeof StyledHeader> {
  avatarProps?: AvatarProps
  title: string
  subtitle: string
}

export const Header = ({ children, title, subtitle, ...rest }: IHeader) => {
  return (
    <StyledHeader {...rest}>
      <Avatar {...rest.avatarProps} size="xs" />
      <Column>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Column>
    </StyledHeader>
  )
}
