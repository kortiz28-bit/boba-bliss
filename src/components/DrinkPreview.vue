<script setup lang="ts">
import { useDrinkStore } from '@/stores/drink'

const drink = useDrinkStore()

const flavorColors: Record<string, string> = {
  'Milk Tea': '#D2A679',
  Strawberry: '#F4A6B8',
  Matcha: '#A8C69F',
  Taro: '#C5B3E6',
}
</script>

<template>
  <div class="bg-white rounded-2xl p-6 shadow-sm text-center">
    <h2 class="text-2xl font-bold mb-4">Your Drink</h2>

    <div class="relative w-40 mx-auto mt-8 mb-6">
      <div class="absolute -top-6 right-10 w-4 h-12 bg-pink-400 rounded-full"></div>

      <div
        class="relative h-52 border-4 border-gray-200 rounded-b-3xl rounded-t-lg"
        :style="{ backgroundColor: flavorColors[drink.flavor] }"
      >
        <div
          v-if="drink.toppings.includes('Boba Pearls')"
          class="absolute bottom-3 inset-x-0 flex justify-center gap-2"
        >
          <span
            v-for="n in 5"
            :key="n"
            class="w-5 h-5 bg-amber-950 rounded-full"
          ></span>
        </div>
      </div>
    </div>

    <h3 class="text-xl font-semibold">{{ drink.flavor }}</h3>
    <p class="text-gray-500">{{ drink.size }}</p>
    <p class="text-gray-500">{{ drink.sweetness }} Sweetness</p>
    <p class="text-gray-500">{{ drink.ice }}</p>

    <p class="mt-3">
      {{ drink.toppings.join(', ') || 'No toppings' }}
    </p>
  </div>
</template>
