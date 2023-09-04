<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import TheTimeline from '@/components/pages/TheTimeline.vue'
import TheActivities from '@/components/pages/TheActivities.vue'
import TheProgress from '@/components/pages/TheProgress.vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '@/helpers/constants'
import { provide, readonly } from 'vue'
import { generatePeriodSelectOptions } from '@/helpers/functions'
import { currentPage, timelineRef } from '@/router'
import * as keys from '@/keys'
import {
  activities,
  createActivity,
  deleteActivity,
  setActivitySecondsToComplete,
  activitySelectOptions
} from '@/activities'
import {
  resetTimelineItemActivities,
  setTimelineItemActivity,
  timelineItems,
  updateTimelineItemActivitySeconds
} from '@/timeline-items'

provide(keys.updateTimelineItemActivitySecondsKey, updateTimelineItemActivitySeconds)
provide(keys.setActivitySecondsToCompleteKey, setActivitySecondsToComplete)
provide(keys.setTimelineItemActivityKey, setTimelineItemActivity)
provide(keys.createActivityKey, createActivity)
provide(keys.deleteActivityKey, (activity) => {
  resetTimelineItemActivities(activity)
  deleteActivity(activity)
})
provide(keys.periodSelectOptionsKey, readonly(generatePeriodSelectOptions()))
provide(keys.activitySelectOptionsKey, readonly(activitySelectOptions))
provide(keys.timelineItemsKey, readonly(timelineItems))
</script>

<template>
  <TheHeader />

  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      ref="timelineRef"
    />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav />
</template>
