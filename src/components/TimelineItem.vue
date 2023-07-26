<script setup>
import BaseSelect from '@/components/ui/BaseSelect.vue'
import { isTimelineItemValid } from '@/helpers/validators'
import { ref } from 'vue'
import TimelineHour from '@/components/TimelineHour.vue'

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  }
})

const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Training' }
]

const selectedActivityId = ref(1)
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      @select="selectedActivityId = $event"
      :options="options"
      :selected="selectedActivityId"
      placeholder="Rest"
    />
  </li>
</template>
