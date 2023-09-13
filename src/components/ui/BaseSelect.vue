<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import { isSelectValueValid, isUndefinedOrNull, validateSelectOptions } from '@/helpers/validators'
import { computed } from 'vue'
import { BUTTON_TYPE_NEUTRAL } from '@/helpers/constants'
import { normalizeSelectValue } from '@/helpers/functions'
import BaseIcon from '@/components/ui/BaseIcon.vue'

const props = defineProps({
  selected: [String, Number],
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
  select: isSelectValueValid
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))

function select(value) {
  emit('select', normalizeSelectValue(value))
}
</script>

<template>
  <div class="flex gap-2">
    <BaseButton @click="select(null)" :type="BUTTON_TYPE_NEUTRAL">
      <BaseIcon name="XMark" class="h-8" />
    </BaseButton>
    <select
      @change="select($event.target.value)"
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
