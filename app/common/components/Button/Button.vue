<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    intent: ButtonProps['intent']
    fit?: ButtonProps['fit']
  }>(),
  {
    intent: 'primary',
    fit: false,
  },
)

type ButtonProps = CVAProps<typeof button>
const button = cva('rounded-full px-md py-sm', {
  variants: {
    intent: {
      primary: 'bg-success shadow transition duration-200 hover:bg-success-fade',
      secondary: 'bg-secondary shadow transition duration-200 hover:bg-secondary-fade',
    },
    fit: {
      true: 'w-fit',
      false: 'w-full',
    },
  },
})
</script>

<template>
  <button :class="button(props)">
    <TextParagraph>
      <slot />
    </TextParagraph>
  </button>
</template>
