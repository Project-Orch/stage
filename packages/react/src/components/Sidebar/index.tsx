import { Content, IContent } from './content'
import { IRoot, Root } from './root'

interface ISidebar {
  Root: (args: IRoot) => JSX.Element
  Content: (args: IContent) => JSX.Element
}

export const Sidebar: ISidebar = {
  Root: (args) => <Root {...args} />,
  Content: (args) => <Content {...args} />,
}
