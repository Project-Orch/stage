import { Content, IContent } from './content'
import { IHeader, Header } from './header'
import { IItem, Item } from './item'
import { IRoot, Root } from './root'
import { ISection, Section } from './section'
import { ITrigger, Trigger } from './trigger'

interface ISidebar {
  Root: (args: IRoot) => JSX.Element
  Content: (args: IContent) => JSX.Element
  Trigger: (args: ITrigger) => JSX.Element
  Header: (args: IHeader) => JSX.Element
  Section: (args: ISection) => JSX.Element
  Item: (args: IItem) => JSX.Element
}

export const Sidebar: ISidebar = {
  Root: (args) => <Root {...args} />,
  Content: (args) => <Content {...args} />,
  Trigger: (args) => <Trigger {...args} />,
  Header: (args) => <Header {...args} />,
  Section: (args) => <Section {...args} />,
  Item: (args) => <Item {...args} />,
}
