<template>
  <div class="container mx-auto px-8 py-4">
    <div class="grid grid-cols-1 md:grid-cols-3 md:gap-8">
      <div class="col-span-1 md:col-span-2">
        <div class="pb-8">
          <p class="pb-4">
            Despite their impressive growth rate, fast-growing hedging is
            actually a relatively low-maintenance choice, often needing to be
            pruned just twice a year to keep it tidy and to shape. If you're
            looking for a hedge to bring privacy and security to your garden,
            fast-growing hedging is an excellent choice, as they can grow up to
            5m in height. Fast-growing Conifer and evergreen hedging plants are
            a particularly popular option for adding extra privacy, although our
            team is happy to help you choose a fast-growing hedge that is right
            for you.
          </p>
          <p>
            Planting fast-growing hedging is also a wonderful way to attract
            more wildlife to your garden, as it provides food and shelter to
            birds.
          </p>
        </div>
        <div class="pb-8">
          <the-calculator-form
            :plantsNumber="product.plantsNumber"
            :productName="product.name"
            :plantsPerMeter="plantsPerMeter"
          />
        </div>
      </div>

      <div
        class="
          flex
          items-start
          justify-center
          row-start-1
          md:row-start-auto
          mb-6
        "
      >
        <the-calculator-image
          :src="product.img || './assets/logo.png'"
          :alt="product.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TheCalculatorForm from './the-calculator-form'
import TheCalculatorImage from './the-calculator-image'

import { PLANTS_PER_METER } from '../consts/calcuator.js'
import { DEFAULT_PRODUCT } from '../consts/product.js'

export default {
  name: 'HedgeCalculator',
  components: {
    TheCalculatorForm,
    TheCalculatorImage
  },
  props: {
    product: {
      type: Object,
      default () {
        return DEFAULT_PRODUCT
      }
    },
    plantsPerMeter: {
      type: Number,
      default: PLANTS_PER_METER
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
