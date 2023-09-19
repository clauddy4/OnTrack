<script setup>
import { ICONS } from '@/helpers/icons'
import { isIconValid } from '@/helpers/validators'

defineProps({
  name: {
    required: true,
    type: String,
    validator: isIconValid
  }
})
</script>

<template>
  <component :is="ICONS[name]" :class="$attrs.class || 'h-8'" />
</template>
