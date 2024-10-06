import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import Card from './Card.vue'

const meta = {
  title: 'Patterns/Card',
  component: Card,
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>
type StoryWithSlots = Story & {
  args: {
    default: string
  }
}

export const Primary: StoryWithSlots = {
  args: {
    default: 'Im a Card',
  },
  render(args) {
    return h(Card, args)
  },
}
