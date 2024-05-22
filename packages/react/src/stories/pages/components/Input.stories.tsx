import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../../../components/Input'
import { Container } from '../../components/Container'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Input',
    label: 'Label',
  },
}
