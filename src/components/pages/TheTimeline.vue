<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import {
  timelineItems,
  timelineItemRefs,
  scrollToCurrentHour,
  scrollToHour
} from '@/timeline-items'
import { onActivated } from 'vue'

onActivated(scrollToCurrentHour)
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        ref="timelineItemRefs"
        @scroll-to-hour="scrollToHour(timelineItem.hour)"
      />
    </ul>
  </div>
</template>
