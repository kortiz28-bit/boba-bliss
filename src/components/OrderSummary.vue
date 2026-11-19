<script setup lang="ts">
import { useDrinkStore } from '@/stores/drink'

const drink = useDrinkStore()
</script>

<template>
  <div class="bg-white rounded-2xl p-6 shadow-sm">
    <h2 class="text-2xl font-bold mb-4">Order Summary</h2>

    <p>Flavor: {{ drink.flavor }}</p>
    <p>Size: {{ drink.size }}</p>
    <p>Sweetness: {{ drink.sweetness }}</p>
    <p>Ice: {{ drink.ice }}</p>
    <p>Toppings: {{ drink.toppings.join(', ') || 'None' }}</p>

    <h3 class="text-xl font-bold mt-4">
      Total: ${{ drink.totalPrice.toFixed(2) }}
    </h3>

    <button
      @click="drink.resetDrink()"
      class="bg-pink-400 text-white rounded-lg p-2 mt-4 w-full hover:bg-pink-500"
    >
      Reset Drink
    </button>
  </div>
</template>
