import { ref } from 'vue'
import { normalizePageHash } from '@/helpers/functions'
import { PAGE_TIMELINE } from '@/helpers/constants'

export const currentPage = ref(normalizePageHash())
export const timelineRef = ref()

export function navigate(page) {
  if (currentPage.value === PAGE_TIMELINE && page === PAGE_TIMELINE) {
    timelineRef.value.scrollToHour()
  }

  if (page !== PAGE_TIMELINE) {
    document.body.scrollIntoView()
  }

  currentPage.value = page
}
