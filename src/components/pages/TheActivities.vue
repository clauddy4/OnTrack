<script setup>
import ActivityItem from '@/components/ActivityItem.vue'
import {
  isActivityValid,
  isNumber,
  validateActivities,
  validateTimelineItems
} from '@/helpers/validators'
import TheActivityForm from '@/components/TheActivityForm.vue'
import TheActivitiesEmptyState from '@/components/TheActivitiesEmptyState.vue'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  },
  timelineItems: {
    type: Array,
    required: true,
    validator: validateTimelineItems
  }
})

const emit = defineEmits({
  deleteActivity: isActivityValid,
  createActivity: isActivityValid,
  setActivitySecondsToComplete(activity, secondsToComplete) {
    return [isActivityValid(activity), isNumber(secondsToComplete)].every(Boolean)
  }
})

function setSecondsToComplete(activity, secondsToComplete) {
  emit('setActivitySecondsToComplete', activity, secondsToComplete)
}
</script>

<template>
  <div class="flex grow flex-col">
    <ul v-if="activities.length" class="grow divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        :timeline-items="timelineItems"
        @delete="emit('deleteActivity', activity)"
        @set-seconds-to-complete="setSecondsToComplete(activity, $event)"
      />
    </ul>
    <TheActivitiesEmptyState v-else />
    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>
