import { ComponentProps } from 'react'
import { Trigger as CollapsibleTrigger } from './collapsible'
import { IconButton } from '../IconButton'
import { SidebarSimple } from '../../assets/icons/components/SimpleSidebar'

export interface ITrigger extends ComponentProps<typeof CollapsibleTrigger> {}

export const Trigger = ({ children, ...rest }: ITrigger) => {
  if (!rest.asChild) {
    return (
      <CollapsibleTrigger asChild {...rest}>
        <IconButton size="sm" variant="ghost">
          <SidebarSimple />
        </IconButton>
      </CollapsibleTrigger>
    )
  }

  return (
    <CollapsibleTrigger asChild {...rest}>
      {children}
    </CollapsibleTrigger>
  )
}
