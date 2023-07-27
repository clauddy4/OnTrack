<script setup>
import {BUTTON_TYPE_DANGER, BUTTON_TYPE_NEUTRAL} from '@/helpers/constants'
import {isButtonTypeValid} from "@/helpers/validators";

defineProps({
  type: {
    type: String,
    default: BUTTON_TYPE_NEUTRAL,
    validator: isButtonTypeValid
  }
})

const typeClasses = {
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 enabled:hover:bg-gray-200',
  [BUTTON_TYPE_DANGER]: 'bg-red-400 enabled:hover:bg-red-500 text-white'
}
</script>

<template>
  <button
    :class="`${typeClasses[type]} rounded p-3 disabled:cursor-not-allowed disabled:opacity-50`"
  >
    <slot />
  </button>
</template>
