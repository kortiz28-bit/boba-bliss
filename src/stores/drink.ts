import { defineStore } from 'pinia'

export const useDrinkStore = defineStore('drink', {
  state: () => ({
    flavor: 'Milk Tea',
    size: 'Medium',
    sweetness: '100%',
    ice: 'Regular Ice',
    toppings: [] as string[],
  }),

  getters: {
    totalPrice: (state) => {
      let price = 4.50

      if (state.size === 'Medium') {
        price += 0.50
      }

      if (state.size === 'Large') {
        price += 1.00
      }

      return price + state.toppings.length * 0.75
    },
  },

  actions: {
    toggleTopping(topping: string) {
      if (this.toppings.includes(topping)) {
        this.toppings = this.toppings.filter(item => item !== topping)
      } else {
        this.toppings.push(topping)
      }
    },

    resetDrink() {
      this.$reset()
    },
  },
})
