import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import Paragraph from './Paragraph.vue'

const meta = {
  title: 'Components/Paragraph',
  component: Paragraph,
} satisfies Meta<typeof Paragraph>

export default meta
type Story = StoryObj<typeof meta>
type StoryWithSlots = Story & {
  args: {
    default: string
  }
}

export const Primary: StoryWithSlots = {
  args: {
    default: 'Im a Paragraph',
  },
  render(args) {
    return h(Paragraph, args, {
      default: () => args.default,
    })
  },
}
