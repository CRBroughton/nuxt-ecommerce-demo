<script setup lang="ts">
// import { setColourTheme } from '~/common/composables/selectTheme'

// class="mx-auto max-w-sm overflow-hidden rounded-lg shadow-md transition-transform dark hallowen hover:scale-105"

// const colorMode = useColorMode()
</script>

<template>
  <Stack :cols="1" class="mx-auto max-w-sm overflow-hidden rounded-lg shadow-lg">
    <slot />
    <div class="p-sm">
      <div class="">
        <TextHeading>
          <slot name="heading" />
        </TextHeading>
        <TextParagraph>
          <slot name="subheading" />
        </TextParagraph>

        <TextParagraph>
          <slot name="amount" />
        </TextParagraph>
      </div>
    </div>
    <Row justify="center" class="w-full p-sm">
      <Button>
        Add to Cart
      </Button>
      <Button intent="secondary">
        View Details
      </Button>
    </Row>
  </Stack>
</template>
