import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from '../../../components/Sidebar'
import { Container } from '../../components/Container'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  decorators: [
    (Story) => (
      <Container>
        <Sidebar.Root>
          <Sidebar.Content>Gustavo</Sidebar.Content>
        </Sidebar.Root>
      </Container>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Default: Story = {
  args: {},
}
