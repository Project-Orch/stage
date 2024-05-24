import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../../components/Button'
import { Container } from '../../components/Container'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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

type Story = StoryObj<typeof Button>

export const Solid: Story = {
  args: {
    children: 'Default',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  render: () => <Button variant="outline">Outline</Button>,
}

export const Ghost: Story = {
  args: {
    children: 'Default',
    variant: 'ghost',
  },
  render: () => <Button variant="ghost">Ghost</Button>,
}

export const Link: Story = {
  args: {
    children: 'Default',
    variant: 'link',
  },
  render: () => <Button variant="link">Link</Button>,
}

export const Subtle: Story = {
  args: {
    children: 'Default',
    variant: 'link',
  },
  render: () => <Button variant="subtle">Subtle</Button>,
}
