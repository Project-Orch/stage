import type { Meta, StoryObj } from '@storybook/react'
import { Alert, alert } from '../../../components/Alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => (
      <>
        <button
          onClick={() =>
            alert.info('Meu toast ta ficando bonito', {
              description: 'descricao bem elaborada',
            })
          }
        >
          Give me a alert
        </button>
        <Story />
      </>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {}
