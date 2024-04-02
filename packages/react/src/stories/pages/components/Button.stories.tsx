import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../../components/Button'
import { Container } from '../../components/Container'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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

export const Default: Story = {
  args: {
    children: 'Default',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
}

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
}
