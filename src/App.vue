<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import TheTimeline from '@/components/pages/TheTimeline.vue'
import TheActivities from '@/components/pages/TheActivities.vue'
import TheProgress from '@/components/pages/TheProgress.vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '@/helpers/constants'
import { computed, ref } from 'vue'
import {
  generateTimelineItems,
  normalizePageHash,
  generateActivitySelectOptions,
  generateActivities
} from '@/helpers/functions'

const currentPage = ref(normalizePageHash())
const timelineItems = ref(generateTimelineItems())
const activities = ref(generateActivities())
const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

function goTo(page) {
  currentPage.value = page
}

function deleteActivity(activity) {
  timelineItems.value.forEach((timelineItem) => {
    if (timelineItem.activityId === activity.id) {
      timelineItem.activityId = null
    }
  })
  activities.value.splice(activities.value.indexOf(activity), 1)
}

function createActivity(activity) {
  activities.value.push(activity)
}

function setTimelineItemActivity(timelineItem, activity) {
  timelineItem.activityId = activity.id
}

function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete
}
</script>

<template>
  <TheHeader @navigate="goTo($event)" />

  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activities="activities"
      :activity-select-options="activitySelectOptions"
      @set-timeline-item-activity="setTimelineItemActivity"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @delete-activity="deleteActivity"
      @create-activity="createActivity"
      @set-activity-seconds-to-complete="setActivitySecondsToComplete"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
