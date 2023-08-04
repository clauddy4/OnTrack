<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { isNumberOrNull, isUndefinedOrNull, validateSelectOptions } from '@/helpers/validators'
import { computed } from 'vue'
import { BUTTON_TYPE_NEUTRAL } from '@/helpers/constants'

const props = defineProps({
  selected: Number,
  options: {
    type: Array,
    required: true,
    validator: validateSelectOptions
  },
  placeholder: {
    type: String,
    required: true
  }
})

const emit = defineEmits({
  select: isNumberOrNull
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))
</script>

<template>
  <div class="flex gap-2">
    <BaseButton @click="emit('select', null)" :type="BUTTON_TYPE_NEUTRAL">
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select
      @change="emit('select', +$event.target.value)"
      class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl"
    >
      <option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
