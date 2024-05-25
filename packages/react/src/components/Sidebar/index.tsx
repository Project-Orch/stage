import { Content, IContent } from './content'
import { IRoot, Root } from './root'
import { ITrigger, Trigger } from './trigger'

interface ISidebar {
  Root: (args: IRoot) => JSX.Element
  Content: (args: IContent) => JSX.Element
  Trigger: (args: ITrigger) => JSX.Element
}

export const Sidebar: ISidebar = {
  Root: (args) => <Root {...args} />,
  Content: (args) => <Content {...args} />,
  Trigger: (args) => <Trigger {...args} />,
}
