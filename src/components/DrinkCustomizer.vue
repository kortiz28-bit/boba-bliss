<script setup lang="ts">
import { useDrinkStore } from '@/stores/drink'

const drink = useDrinkStore()

const flavors = ['Milk Tea', 'Strawberry', 'Matcha', 'Taro']
const sizes = ['Small', 'Medium', 'Large']
const sweetnessLevels = ['0%', '25%', '50%', '75%', '100%']
const iceLevels = ['No Ice', 'Light Ice', 'Regular Ice']
const toppings = ['Boba Pearls', 'Popping Boba', 'Jelly']
</script>

<template>
  <div class="bg-white rounded-2xl p-6 shadow-sm">
    <h2 class="text-2xl font-bold mb-4">Customize Your Drink</h2>

    <div class="space-y-4">
      <div>
        <label for="flavor" class="block font-medium mb-1">Flavor</label>
        <select id="flavor" v-model="drink.flavor" class="w-full border rounded-lg p-2">
          <option v-for="flavor in flavors" :key="flavor">
            {{ flavor }}
          </option>
        </select>
      </div>

      <div>
        <label for="size" class="block font-medium mb-1">Size</label>
        <select id="size" v-model="drink.size" class="w-full border rounded-lg p-2">
          <option v-for="size in sizes" :key="size">
            {{ size }}
          </option>
        </select>
      </div>

      <div>
        <label for="sweetness" class="block font-medium mb-1">Sweetness</label>
        <select id="sweetness" v-model="drink.sweetness" class="w-full border rounded-lg p-2">
          <option v-for="level in sweetnessLevels" :key="level">
            {{ level }}
          </option>
        </select>
      </div>

      <div>
        <label for="ice" class="block font-medium mb-1">Ice Level</label>
        <select id="ice" v-model="drink.ice" class="w-full border rounded-lg p-2">
          <option v-for="ice in iceLevels" :key="ice">
            {{ ice }}
          </option>
        </select>
      </div>

      <div>
        <h3 class="font-medium mb-2">Toppings (+$0.75 each)</h3>

        <label
          v-for="topping in toppings"
          :key="topping"
          class="flex items-center gap-2 mb-2"
        >
          <input
            type="checkbox"
            :checked="drink.toppings.includes(topping)"
            @change="drink.toggleTopping(topping)"
          />
          {{ topping }}
        </label>
      </div>
    </div>
  </div>
</template>
