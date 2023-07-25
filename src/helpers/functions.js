import { HOURS_IN_DAY, PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from '@/helpers/constants'

export function normalizePageHash() {
  const hash = window.location.hash.slice(1)
  const pages = [PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS]

  if (Object.keys(pages).includes(hash)) return hash

  window.location.hash = PAGE_TIMELINE
  return PAGE_TIMELINE
}

export function generateTimelineItems() {
  const timelineItems = []

  for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }

  return timelineItems
}
