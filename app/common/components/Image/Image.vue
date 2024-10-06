<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <NuxtImg :src :alt class="w-full object-cover" />
</template>
