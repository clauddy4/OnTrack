<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import TheTimeline from '@/components/pages/TheTimeline.vue'
import TheActivities from '@/components/pages/TheActivities.vue'
import TheProgress from '@/components/pages/TheProgress.vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '@/helpers/constants'
import { ref } from 'vue'
import { generateTimelineItems, normalizePageHash } from '@/helpers/functions'

const currentPage = ref(normalizePageHash())

function goTo(page) {
  currentPage.value = page
}

const timelineItems = generateTimelineItems()
</script>

<template>
  <TheHeader @go-to-timeline="goTo(PAGE_TIMELINE)" @go-to-progress="goTo(PAGE_PROGRESS)" />

  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
