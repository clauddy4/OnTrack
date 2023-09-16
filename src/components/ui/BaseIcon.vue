<script setup>
import { ICONS } from '@/helpers/icons'
import { isIconValid, isNotEmptyString } from '@/helpers/validators'

defineProps({
  name: {
    required: true,
    type: String,
    validator: isIconValid
  },
  classes: {
    type: String,
    default: 'h-8',
    validator: isNotEmptyString
  }
})
</script>

<template>
  <component :is="ICONS[name]" :class="classes" />
</template>
