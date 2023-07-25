import { HOURS_IN_DAY, MIDNIGHT_HOUR, NAV_ITEMS } from '@/helpers/constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isTimelineItemValid({ hour }) {
  return typeof hour === 'number' && hour >= MIDNIGHT_HOUR && hour < HOURS_IN_DAY
}

function isOptionValid({ value, label }) {
  return typeof value === 'number' && typeof label === 'string'
}

export function validateSelectOptions(options) {
  return options.every(isOptionValid)
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimelineItemValid)
}
