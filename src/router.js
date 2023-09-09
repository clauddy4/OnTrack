import { ref } from 'vue'
import { PAGE_TIMELINE } from '@/helpers/constants'
import { isPageValid } from '@/helpers/validators'

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
