<script setup lang="ts">
import DrinkCustomizer from './components/DrinkCustomizer.vue'
import DrinkPreview from './components/DrinkPreview.vue'
import OrderSummary from './components/OrderSummary.vue'
</script>

<template>
  <main class="min-h-screen bg-pink-100 p-6">
    <h1 class="text-4xl font-bold text-center text-pink-600 mb-2">
      Boba Bliss
    </h1>

    <p class="text-center text-gray-600 mb-8">
      Create your perfect boba drink!
    </p>

    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <DrinkCustomizer />
      <DrinkPreview />
      <OrderSummary />
    </div>
  </main>
</template>
