<script setup lang="ts">
withDefaults(
  defineProps<{
    intent?: HeadingProps['intent']
  }>(),
  {
    intent: 'main',
  },
)

type HeadingProps = CVAProps<typeof paragraph>
const paragraph = cva('', {
  variants: {
    intent: {
      main: 'tracking-tighter',
    },
  },
})
</script>

<template>
  <p :class="paragraph({ intent })">
    <slot />
  </p>
</template>
