<script setup>
import BaseSelect from '@/components/ui/BaseSelect.vue'
import { isHourValid, isTimelineItemValid } from '@/helpers/validators'
import TimelineHour from '@/components/TimelineHour.vue'
import TimelineStopwatch from '@/components/TimelineStopwatch.vue'
import { inject } from 'vue'

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  }
})

const emit = defineEmits({
  scrollToHour: isHourValid
})

const setTimelineItemActivity = inject('setTimelineItemActivity')
const activitySelectOptions = inject('activitySelectOptions')
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHour
      :hour="timelineItem.hour"
      @click.prevent="emit('scrollToHour', timelineItem.hour)"
    />
    <BaseSelect
      @select="setTimelineItemActivity(timelineItem, $event)"
      :options="activitySelectOptions"
      :selected="timelineItem.activityId"
      placeholder="Rest"
    />
    <TimelineStopwatch :timeline-item="timelineItem" />
  </li>
</template>
