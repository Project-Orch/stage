import type { Meta, StoryObj } from '@storybook/react'
import { Alert, alert } from '../../../components/Alert'
import { Button } from '../../../components/Button'
import { Container } from '../../components/Container'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  args: {},
  decorators: [
    (Story) => (
      <Container>
        <Button
          onClick={() =>
            alert.message('Meu toast ta ficando bonito', {
              description: 'descricao bem elaborada',
            })
          }
        >
          Give me a alert
        </Button>
        <Button
          // variant="outline"
          onClick={() =>
            alert.info('Meu toast ta ficando bonito', {
              description: 'descricao bem elaborada',
            })
          }
        >
          Info
        </Button>
        <Button
          // variant="outline"
          onClick={() =>
            alert.success('Meu toast ta ficando bonito', {
              description: 'descricao bem elaborada',
            })
          }
        >
          Success
        </Button>
        <Button
          // variant="outline"
          onClick={() =>
            alert.warning('Meu toast ta ficando bonito', {
              description: 'descricao bem elaborada',
            })
          }
        >
          Warning
        </Button>
        <Button
          // variant="subtle"
          onClick={() =>
            alert.error('Meu toast ta ficando bonito', {
              description: 'descricao bem elaborada',
            })
          }
        >
          Error
        </Button>
        <Story />
      </Container>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {}
