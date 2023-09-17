<script setup>
import { computed } from 'vue'
import { getActivityProgress } from '@/activities'
import { getProgressColorClass } from '@/functions'
import { getTotalActivitySeconds, timelineItems } from '@/timeline-items'
import { formatSeconds } from '@/functions'
import { isActivityValid } from '@/validators'

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid
  }
})

const percentage = computed(() => getActivityProgress(props.activity, trackedActivitySeconds.value))
const trackedActivitySeconds = computed(() =>
  getTotalActivitySeconds(timelineItems.value, props.activity)
)
</script>

<template>
  <li class="flex flex-col gap-1 p-4">
    <div class="truncate text-xl">{{ activity.name }}</div>
    <div class="flex h-5 overflow-hidden rounded bg-neutral-200">
      <div :class="getProgressColorClass(percentage)" :style="`width: ${percentage}%`" />
    </div>
    <div class="flex justify-between font-mono text-sm">
      <span>{{ percentage }}%</span>
      <span>
        {{ formatSeconds(trackedActivitySeconds) }} /
        {{ formatSeconds(activity.secondsToComplete) }}
      </span>
    </div>
  </li>
</template>
