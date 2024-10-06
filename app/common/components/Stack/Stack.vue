<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: string
    cols?: StackProps['cols']
    gap?: StackProps['gap']
    justify?: StackProps['justify']
  }>(),
  {
    cols: 1,
    type: 'div',
    gap: 2,
    justify: 'start',
  },
)

type StackProps = CVAProps<typeof stack>
const stack = cva('grid', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
    },
    justify: {
      start: 'justify-items-start',
      center: 'justify-items-center',
      end: 'justify-items-end',
      stretch: 'justify-items-stretch',
    },
    gap: {
      2: 'gap-2',
      4: 'gap-4',
      8: 'gap-8',
    },
  },
})
</script>

<template>
  <Component
    :is="props.type"
    :class="stack({ cols, justify, gap })"
  >
    <slot />
  </Component>
</template>
