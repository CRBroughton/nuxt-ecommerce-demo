<script setup lang="ts">

</script>

<template>
  <div class="mx-auto max-w-sm space-x-sm space-y-sm overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105">
    <!-- Image Section -->
    <Image src="https://via.placeholder.com/300" alt="Product Image" />
    <!-- Card Content -->
    <div class="p-4">
      <h2 class="text-gray-800 text-lg font-semibold">
        Product Name
      </h2>
      <p class="mt-1 text-gray-600">
        Short description of the product goes here. It should be engaging and informative.
      </p>

      <!-- Price Section -->
      <p class="text-md ">
        $29.99
      </p>

      <!-- Button Section -->
      <div class="flex gap-2">
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

<style scoped>

</style>
