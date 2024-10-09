import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import Button from './Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>
type StoryWithSlots = Story & {
  args: {
    default: string
  }
}

export const Primary: StoryWithSlots = {
  args: {
    default: 'Im a button',
    fit: true,
  },
  render(args) {
    return h('div', { class: 'light' }, [
      h(Button, args, {
        default: () => args.default,
      }),
    ])
  },
}

export const Secondary: StoryWithSlots = {
  args: {
    default: 'Im a button',
    intent: 'secondary',
    fit: true,
  },
  render(args) {
    return h('div', { class: 'light' }, [
      h(Button, args, {
        default: () => args.default,
      }),
    ])
  },
}
