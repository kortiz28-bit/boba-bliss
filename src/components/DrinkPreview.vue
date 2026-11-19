<script setup lang="ts">
import { useDrinkStore } from '@/stores/drink'

const drink = useDrinkStore()

const flavorColors: Record<string, string> = {
  'Milk Tea': '#D2A679',
  Strawberry: '#F4A6B8',
  Matcha: '#A8C69F',
  Taro: '#C5B3E6',
}

const positions = [
  { x: 62, y: 131 },
  { x: 80, y: 134 },
  { x: 98, y: 131 },
  { x: 71, y: 119 },
  { x: 89, y: 119 },
]
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

      <g
        v-for="(topping, index) in drink.toppings"
        :key="topping"
        :transform="`translate(0, ${-index * 25})`"
      >
        <g v-for="(position, i) in positions" :key="i">
          <circle
            v-if="topping === 'Boba Pearls'"
            :cx="position.x"
            :cy="position.y"
            r="6"
            fill="#65403d"
          />

          <circle
            v-if="topping === 'Popping Boba'"
            :cx="position.x"
            :cy="position.y"
            r="6"
            fill="#f6b34f"
          />

          <rect
            v-if="topping === 'Jelly'"
            :x="position.x - 5"
            :y="position.y - 5"
            width="10"
            height="10"
            rx="2"
            fill="#b6dda7"
            stroke="#8ab980"
          />
        </g>
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
