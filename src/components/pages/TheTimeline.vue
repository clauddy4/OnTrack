<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import { timelineItems, timelineItemRefs, scrollToCurrentHour } from '@/timeline-items'
import { nextTick, watchPostEffect } from 'vue'
import { PAGE_TIMELINE } from '@/helpers/constants'
import { currentPage } from '@/router'

watchPostEffect(async () => {
  if (currentPage === PAGE_TIMELINE) {
    await nextTick()
    scrollToCurrentHour(false)
  }
})
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
