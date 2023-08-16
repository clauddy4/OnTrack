<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import { PERIOD_SELECT_OPTIONS } from '@/helpers/constants'
import { isActivityValid, isNumber, isUndefined, validateTimelineItems } from '@/helpers/validators'
import { BUTTON_TYPE_DANGER } from '@/helpers/constants'
import ActivitySecondsToComplete from '@/components/ActivitySecondsToComplete.vue'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  },
  timelineItems: {
    type: Array,
    required: true,
    validator: validateTimelineItems
  }
})

const emit = defineEmits({
  delete: isUndefined,
  setSecondsToComplete: isNumber
})
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        @select="emit('setSecondsToComplete', $event || 0)"
        :options="PERIOD_SELECT_OPTIONS"
        :selected="activity.secondsToComplete || null"
        placeholder="hh:mm"
        class="font-mono grow"
      />

      <ActivitySecondsToComplete
        v-if="activity.secondsToComplete"
        :activity="activity"
        :timeline-items="timelineItems"
      />
    </div>
  </li>
</template>
