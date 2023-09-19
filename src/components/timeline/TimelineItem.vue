<script setup>
import { isTimelineItemValid } from '@/helpers/validators'
import { updateTimelineItem } from '@/helpers/timeline-items'
import { activitySelectOptions } from '@/helpers/activities'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import TimelineHour from '@/components/timeline/TimelineHour.vue'
import TimelineStopwatch from '@/components/timeline/TimelineStopwatch.vue'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      placeholder="Rest"
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      @select="updateTimelineItem(timelineItem, { activityId: $event })"
    />
    <TimelineStopwatch :timeline-item="timelineItem" />
  </li>
</template>
