import { ref } from 'vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '../helpers/constants'
import { isPageValid } from '../helpers/validators'
import TheTimeline from '../components/timeline/TheTimeline.vue'
import TheActivities from '../components/activities/TheActivities.vue'
import TheProgress from '../components/progress/TheProgress.vue'

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
  const page = window.location.hash.slice(1)

  if (isPageValid(page)) {
    return page
  }

  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}
