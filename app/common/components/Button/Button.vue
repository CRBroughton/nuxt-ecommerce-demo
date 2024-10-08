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
const button = cva('w-full rounded-full border-normal px-md py-sm', {
  variants: {
    intent: {
      primary: 'border-primary bg-light text-dark',
      secondary: 'border-secondary bg-light text-dark',
    },
  },
})
</script>

<template>
  <button :class="button({ intent })">
    <slot />
  </button>
</template>
