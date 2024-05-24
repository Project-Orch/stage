import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from '../../../components/IconButton'
import { Container } from '../../components/Container'
import { DiamondsFour } from '@phosphor-icons/react'

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
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

type Story = StoryObj<typeof IconButton>

export const XSmall: Story = {
  args: {
    children: <DiamondsFour />,
  },
  render: () => (
    <IconButton variant="ghost" size="xs">
      <DiamondsFour />
    </IconButton>
  ),
}

export const Small: Story = {
  args: {
    children: <DiamondsFour />,
  },
  render: () => (
    <IconButton variant="ghost" size="sm">
      <DiamondsFour />
    </IconButton>
  ),
}

export const Medium: Story = {
  args: {
    children: <DiamondsFour />,
  },
  render: () => (
    <IconButton variant="ghost" size="md">
      <DiamondsFour />
    </IconButton>
  ),
}

export const Large: Story = {
  args: {
    children: <DiamondsFour />,
  },
  render: () => (
    <IconButton variant="ghost" size="lg">
      <DiamondsFour />
    </IconButton>
  ),
}

export const XLarge: Story = {
  args: {
    children: <DiamondsFour />,
  },
  render: () => (
    <IconButton variant="ghost" size="xl">
      <DiamondsFour />
    </IconButton>
  ),
}

export const TwoExtraLarge: Story = {
  args: {
    children: <DiamondsFour />,
  },
  render: () => (
    <IconButton variant="ghost" size="2xl">
      <DiamondsFour />
    </IconButton>
  ),
}
