import { HOURS_IN_DAY, MIDNIGHT_HOUR, SECONDS_IN_HOUR, PAGE_TIMELINE } from '@/helpers/constants'
import { isPageValid } from '@/helpers/validators'

export function normalizePageHash() {
  const hash = window.location.hash.slice(1)

  if (isPageValid(hash)) return hash

  window.location.hash = PAGE_TIMELINE
  return PAGE_TIMELINE
}

export function generateActivities() {
  return [
    {
      id: id(),
      name: 'Coding',
      secondsToComplete: 2 * SECONDS_IN_HOUR
    },
    {
      id: id(),
      name: 'Reading',
      secondsToComplete: 3 * SECONDS_IN_HOUR
    },
    {
      id: id(),
      name: 'Training',
      secondsToComplete: 2 * SECONDS_IN_HOUR
    }
  ]
}

export function generateTimelineItems() {
  const timelineItems = []

  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }

  return timelineItems
}

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({
    label: activity.name,
    value: activity.id
  }))
}
