<script setup>
import BaseSelect from '@/components/ui/BaseSelect.vue'
import {
  isActivityValid,
  isHourValid,
  isTimelineItemValid,
  validateActivities,
  validateSelectOptions
} from '@/helpers/validators'
import TimelineHour from '@/components/TimelineHour.vue'
import { NULLABLE_ACTIVITY } from '@/helpers/constants'
import TimelineStopwatch from '@/components/TimelineStopwatch.vue'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  },
  activitySelectOptions: {
    type: Array,
    required: true,
    validator: validateSelectOptions
  },
  activities: {
    type: Array,
    required: true,
    validator: validateActivities
  }
})

const emit = defineEmits({
  selectActivity: isActivityValid,
  scrollToHour: isHourValid
})

function selectActivity(id) {
  emit('selectActivity', findActivityById(id))
}

function findActivityById(id) {
  return props.activities.find((activity) => activity.id === id) || NULLABLE_ACTIVITY
}
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHour
      :hour="timelineItem.hour"
      @click.prevent="emit('scrollToHour', timelineItem.hour)"
    />
    <BaseSelect
      @select="selectActivity($event)"
      :options="activitySelectOptions"
      :selected="timelineItem.activityId"
      placeholder="Rest"
    />
    <TimelineStopwatch
        :timeline-item="timelineItem"
    />
  </li>
</template>
