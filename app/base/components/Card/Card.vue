<script setup lang="ts">
// import { setColourTheme } from '~/common/composables/selectTheme'

// class="mx-auto max-w-sm overflow-hidden rounded-lg shadow-md transition-transform dark hallowen hover:scale-105"

// const colorMode = useColorMode()
</script>

<template>
  <Stack :cols="1" class="mx-auto max-w-sm overflow-hidden rounded-lg bg-light shadow-md transition-transform hover:scale-105">
    <slot />
    <div>
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

      <Row justify="center">
        <Button>
          Add to Cart
        </Button>
        <Button>
          View Details
        </Button>
      </Row>
    </div>
  </Stack>
</template>
