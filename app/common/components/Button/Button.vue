<script setup lang="ts">
withDefaults(
  defineProps<{
    intent: ButtonProps['intent']
  }>(),
  {
    intent: 'primary',
  },
)

type ButtonProps = CVAProps<typeof button>
const button = cva('w-fit rounded-full border-normal px-md py-sm', {
  variants: {
    intent: {
      primary: 'border-primary text-light',
      secondary: 'border-secondary text-light',
    },
  },
})
</script>

<template>
  <button :class="button({ intent })">
    <slot />
  </button>
</template>
