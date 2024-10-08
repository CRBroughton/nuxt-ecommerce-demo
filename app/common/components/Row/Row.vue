<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: string
    gap?: RowProps['gap']
    justify?: RowProps['justify']
    wrap?: RowProps['wrap']
    reverse?: RowProps['reverse']
  }>(),
  {
    type: 'div',
    gap: 2,
    justify: 'start',
    wrap: false,
    reverse: false,
  },
)

type RowProps = CVAProps<typeof row>
const row = cva('flex', {
  variants: {
    gap: {
      2: 'gap-2',
      4: 'gap-4',
      8: 'gap-8',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
    },
    wrap: {
      true: 'flex-wrap',
    },
    reverse: {
      true: 'flex-wrap-reverse',
    },
  },
})
</script>

<template>
  <Component :is="props.type" :class="row(props)">
    <slot />
  </Component>
</template>
