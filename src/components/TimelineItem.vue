<script setup>
import BaseSelect from '@/components/ui/BaseSelect.vue'
import { isTimelineItemValid, isUndefined } from '@/helpers/validators'
import TimelineHour from '@/components/TimelineHour.vue'
import TimelineStopwatch from '@/components/TimelineStopwatch.vue'
import { activitySelectOptions } from '@/activities'
import { setTimelineItemActivity } from '@/timeline-items'

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  }
})

const emit = defineEmits({
  scrollToHour: isUndefined()
})
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" @click.prevent="emit('scrollToHour')" />
    <BaseSelect
      @select="setTimelineItemActivity(timelineItem, $event)"
      :options="activitySelectOptions"
      :selected="timelineItem.activityId"
      placeholder="Rest"
    />
    <TimelineStopwatch :timeline-item="timelineItem" />
  </li>
</template>
