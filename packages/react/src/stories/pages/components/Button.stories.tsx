import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../../components/Button'
import { Container } from '../../components/Container'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <Container>
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </Container>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {}
