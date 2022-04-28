<template>
  <form @submit.prevent="handleSubmit" class="mb-6">
    <label for="length" class="block text-gray-700 text-sm font-bold mb-2">
      Lenght in m *
    </label>
    <div class="flex items-start">
      <app-input
        v-model="length"
        type="number"
        :min="minLenght"
        :error="error"
      />
      <app-button text="CALCULATE NOW" :handleClick="handleSubmit" />
    </div>
  </form>
  <div class="mb-6">
    <template v-if="result && !error">
      <h2 class="text-2xl font-bold mb-4">Your result:</h2>
      <div class="block text-gray-700 mb-2">
        For your garden section you need:

        <span class="text-2xl font-bold text-black block sm:inline"
          ><span class="text-4xl">{{ result }}</span> x
          {{ productName }}
        </span>

        <div class="pt-2">
          (this corresponds to a total of
          {{ result * plantsNumber }}
          hedge plants)
        </div>
      </div>
    </template>
    <h2 v-else class="text-2xl font-bold">
      Your result will be displayed here!
    </h2>
  </div>
</template>

<script>
import AppButton from './app-button.vue'
import AppInput from './app-input.vue'

import { calculateHedgesNumber } from '../helpers/calculate-hedges-number'

export default {
  name: 'TheCalculatorForm',
  components: {
    AppButton,
    AppInput
  },
  props: {
    plantsPerMeter: {
      type: Number
    },
    productName: {
      type: String
    },
    plantsNumber: {
      type: Number
    }
  },
  data: function () {
    return {
      length: null,
      result: null,
      error: null,
      minLenght: 1 / this.plantsPerMeter
    }
  },
  methods: {
    validateLength (length) {
      if (!length && length !== 0) {
        return '* Value must be a number'
      }

      if (length && (Number.isNaN(length) || length < 0)) {
        return '* Value should be a positive number'
      }

      if (length < this.minLenght) {
        return `* The minimum length is ${this.minLenght * 100}cm`
      }
      return ''
    },

    handleSubmit () {
      this.error = this.validateLength(this.length)

      if (Number.isNaN(this.plantsPerMeter)) {
        this.error = 'Something went wrong, please try again later'
      }
      if (this.error) {
        return
      }
      this.result = calculateHedgesNumber({
        length: this.length,
        plantsInProduct: this.plantsNumber,
        plantsPerMeter: this.plantsPerMeter
      })
    }
  }
}
</script>

<style>
</style>
