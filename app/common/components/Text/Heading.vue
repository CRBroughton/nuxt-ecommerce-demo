<script setup lang="ts">
withDefaults(
  defineProps<{
    intent: HeadingProps['intent']
  }>(),
  {
    intent: 'main',
  },
)

type HeadingProps = CVAProps<typeof heading>
const heading = cva('font-manrope', {
  variants: {
    intent: {
      main: 'text-xl font-bold tracking-tighter text-dark',
    },
  },
})
</script>

<template>
  <h1 :class="heading({ intent })">
    <slot />
  </h1>
</template>
