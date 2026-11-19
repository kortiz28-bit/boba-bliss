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

    <svg viewBox="0 0 160 165" class="w-48 mx-auto">
      <path
        d="M93 22 L89 67"
        stroke="#db7093"
        stroke-width="12"
        stroke-linecap="round"
      />

      <path
        d="M44 54 L116 54 L106 137 Q80 145 54 137 Z"
        :fill="flavorColors[drink.flavor]"
        stroke="#c77d95"
        stroke-width="2"
      />

      <rect
        x="40" y="48" width="80" height="10" rx="5"
        fill="#fff5ec"
        stroke="#c77d95"
        stroke-width="2"
      />

      <g v-if="drink.toppings.includes('Boba Pearls')" fill="#65403d">
        <circle cx="62" cy="126" r="6" />
        <circle cx="80" cy="130" r="6" />
        <circle cx="98" cy="125" r="6" />
        <circle cx="71" cy="113" r="6" />
        <circle cx="91" cy="113" r="6" />
      </g>

      <g v-if="drink.toppings.includes('Popping Boba')" fill="#f6b34f">
        <circle cx="60" cy="99" r="6" />
        <circle cx="82" cy="99" r="6" />
        <circle cx="100" cy="94" r="6" />

        <circle cx="58" cy="97" r="2" fill="#ffe7b0" />
        <circle cx="80" cy="97" r="2" fill="#ffe7b0" />
        <circle cx="98" cy="92" r="2" fill="#ffe7b0" />
      </g>

      <g v-if="drink.toppings.includes('Jelly')" fill="#b6dda7" stroke="#8ab980">
        <rect x="56" y="72" width="11" height="10" rx="2" />
        <rect x="80" y="78" width="11" height="10" rx="2" />
        <rect x="95" y="64" width="11" height="10" rx="2" />
      </g>
    </svg>

    <h3 class="text-xl font-semibold">{{ drink.flavor }}</h3>
    <p>{{ drink.size }}</p>
    <p>{{ drink.sweetness }} Sweetness</p>
    <p>{{ drink.ice }}</p>

    <p class="mt-3">
      {{ drink.toppings.join(', ') || 'No toppings' }}
    </p>
  </div>
</template>

