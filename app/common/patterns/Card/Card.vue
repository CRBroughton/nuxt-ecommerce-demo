<script setup lang="ts">
</script>

<template>
  <div class="mx-auto max-w-sm space-x-sm space-y-sm overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105">
    <slot />
    <div>
      <TextHeading>
        <slot name="heading" />
      </TextHeading>
      <TextParagraph>
        <slot name="subheading" />
      </TextParagraph>

      <TextParagraph>
        <slot name="amount" />
      </TextParagraph>

      <div>
        <Button>
          Add to Cart
        </Button>
        <Button>
          View Details
        </Button>
      </div>
    </div>
  </div>
</template>
