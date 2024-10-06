import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import Heading from './Heading.vue'

const meta = {
  title: 'Components/Heading',
  component: Heading,
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>
type StoryWithSlots = Story & {
  args: {
    default: string
  }
}

export const Primary: StoryWithSlots = {
  args: {
    default: 'Im a Heading',
  },
  render(args) {
    return h(Heading, args, {
      default: () => args.default,
    })
  },
}
