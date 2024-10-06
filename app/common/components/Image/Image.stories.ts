import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import Image from './Image.vue'

const meta = {
  title: 'Components/Image',
  component: Image,
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    src: 'https://placehold.co/600x400',
    alt: 'Some placeholder',
  },
  render(args) {
    return h(Image, args)
  },
}
