import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '../../../components/Avatar'
import { Container } from '../../components/Container'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {},
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {},
}

export const Name: Story = {
  args: {
    name: 'Gustavo Souza',
  },
}

export const Image: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1716553313539-92c68fde5bca?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
}
