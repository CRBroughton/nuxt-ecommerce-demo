<script setup lang="ts">
withDefaults(
  defineProps<{
    intent: HeadingProps['intent']
  }>(),
  {
    intent: 'main',
  },
)

type HeadingProps = CVAProps<typeof paragraph>
const paragraph = cva('font-manrope', {
  variants: {
    intent: {
      main: 'text-secondary',
    },
  },
})
</script>

<template>
  <p :class="paragraph({ intent })">
    <slot />
  </p>
</template>
