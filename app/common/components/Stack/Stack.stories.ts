import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import Card from '~/common/patterns/Card/Card.vue'
import Image from '../Image/Image.vue'
import Stack from './Stack.vue'

const meta = {
  title: 'Components/Stack',
  component: Stack,
} satisfies Meta<typeof Stack>

export default meta
type Story = StoryObj<typeof meta>

function createSkeletons() {
  const skeletons: VNode[] = []
  for (let index = 0; index < 10; index++) {
    skeletons.push(
      h(Card, null, {
        default: () => h(
          Image,
          { src: 'https://via.placeholder.com/300', alt: 'test' },
        ),
        heading: () => 'Product Name',
        subheading: () => 'Short description of the product goes here. It should be engaging and informative.',
        amount: () => '$29.99',
      }),
    )
  }
  return skeletons
}
export const Primary: Story = {
  render(args) {
    return h(Stack, {
      ...args,
      cols: 3,
      gap: 8,
      justify: 'center',
    }, {
      default: () => createSkeletons(),
    })
  },
}
