<template>
  <div>
    <input
      :type="type"
      :placeholder="placeholder"
      class=" w-52
        sm:w-auto
        shadow
        appearance-none
        rounded
        border
        py-2
        px-3
        text-gray-700
        focus:outline-none focus:shadow-outline
      "
      :class="[error && 'border-red-500']"
      valid
      v-model="content"
      :min="min"
      step="0.01"
    />
    <div class="block text-gray-700 text-sm mb-2 mt-2">
      <p v-if="error" class="text-red-600">{{ error }}</p>
      <p v-else>* The fieleld id reqired</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  emits: ['update:modelValue'],
  props: {
    error: {
      type: String
    },
    min: {
      type: Number
    },
    placeholder: {
      type: String
    },
    modelValue: {
      type: [Number, String]
    },
    type: {
      type: String,
      required: true,
      default: 'text',
      validator (type) {
        return ['text', 'number'].includes(type)
      }
    },
    handleEnter: {
      type: Function
    }
  },
  data () {
    return {
      content: this.modelValue
    }
  },
  watch: {
    content () {
      this.$emit('update:modelValue', this.content)
    }
  }
}
</script>

<style>
</style>
