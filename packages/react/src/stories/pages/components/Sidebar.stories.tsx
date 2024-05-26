import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from '../../../components/Sidebar'
import { Container } from '../../components/Container'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  decorators: [
    (Story) => (
      <Container>
        <Sidebar.Root>
          <Sidebar.Content>
            <Sidebar.Trigger />
            <Sidebar.Header
              avatarProps={{
                name: 'Gustavo Souza',
              }}
              title={"Gustavo's Projects"}
              subtitle="click here for menu"
            />
            <Sidebar.Section>
              <Sidebar.Item selected>Home</Sidebar.Item>
              <Sidebar.Item disabled>Search</Sidebar.Item>
            </Sidebar.Section>
          </Sidebar.Content>
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
