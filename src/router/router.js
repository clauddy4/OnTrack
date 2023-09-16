import { ref } from 'vue'
import { isPageValid } from '@/helpers/validators'
import TheTimeline from '@/components/pages/TheTimeline.vue'
import TheActivities from '@/components/pages/TheActivities.vue'
import TheProgress from '@/components/pages/TheProgress.vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '@/helpers/constants'

export const routes = {
  [PAGE_TIMELINE]: TheTimeline,
  [PAGE_ACTIVITIES]: TheActivities,
  [PAGE_PROGRESS]: TheProgress
}

export const currentPage = ref(normalizePageHash())

export function navigate(page) {
  document.body.scrollIntoView()
  currentPage.value = page
}

export function normalizePageHash() {
  const hash = window.location.hash.slice(1)

  if (isPageValid(hash)) return hash

  window.location.hash = PAGE_TIMELINE
  return PAGE_TIMELINE
}
