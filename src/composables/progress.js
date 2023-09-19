import { computed } from 'vue'
import { getActivityProgress } from '@/activities'
import { getTotalActivitySeconds, timelineItems } from '@/timeline-items'
import { getProgressColorClass } from '@/functions'

export function useProgress(activity) {
  const percentage = computed(() => getActivityProgress(activity, trackedSeconds.value))
  const trackedSeconds = computed(() => getTotalActivitySeconds(timelineItems.value, activity))
  const colorClass = computed(() => getProgressColorClass(percentage.value))

  return {
    percentage,
    trackedSeconds,
    colorClass
  }
}
