<script setup>
import BaseSelect from '@/components/ui/BaseSelect.vue'
import { isTimelineItemValid, validateSelectOptions } from '@/helpers/validators'
import { ref } from 'vue'
import TimelineHour from '@/components/TimelineHour.vue'

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  }
})

const selectedActivityId = ref(null)
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      @select="selectedActivityId = $event"
      :options="activitySelectOptions"
      :selected="selectedActivityId"
      placeholder="Rest"
    />
  </li>
</template>
