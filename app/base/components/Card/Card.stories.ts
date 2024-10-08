import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import Image from '~/common/components/Image/Image.vue'
import Card from './Card.vue'

const meta = {
  title: 'Base/Components/Card',
  component: Card,
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>
type StoryWithSlots = Story & {
  args: {
    default: VNode
    heading: string
    subheading: string
    amount: string
  }
}

export const Primary: StoryWithSlots = {
  args: {
    default: h(Image, { src: 'https://via.placeholder.com/300', alt: 'test' }),
    heading: 'Product Name',
    subheading: 'Short description of the product goes here. It should be engaging and informative.',
    amount: '$29.99',
  },
  render(args) {
    return h('div', { class: 'light' }, [
      h(Card, args, {
        default: () => args.default,
        heading: () => args.heading,
        subheading: () => args.subheading,
        amount: () => args.amount,
      }),
    ])
  },
}
