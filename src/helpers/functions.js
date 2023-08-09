import {
  HOURS_IN_DAY,
  MIDNIGHT_HOUR,
  SECONDS_IN_HOUR,
  PAGE_TIMELINE,
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR
} from '@/helpers/constants'
import { isNull, isPageValid } from '@/helpers/validators'

export function normalizePageHash() {
  const hash = window.location.hash.slice(1)

  if (isPageValid(hash)) return hash

  window.location.hash = PAGE_TIMELINE
  return PAGE_TIMELINE
}

export function generateActivities() {
  return ['Coding', 'Reading', 'Training'].map((name, hours) => ({
    id: id(),
    name,
    secondsToComplete: hours * SECONDS_IN_HOUR
  }))
}

export function generateTimelineItems() {
  const timelineItems = []

  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({
      hour,
      activityId: null
    })
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

export function normalizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : +value
}

export function generatePeriodSelectOptions(periodsInMinutes) {
  return periodsInMinutes.map((period) => ({
    value: period * SECONDS_IN_MINUTE,
    label: generatePeriodLabel(period)
  }))
}

function generatePeriodLabel(period) {
  const hours = Math.floor(period / MINUTES_IN_HOUR)
    .toString()
    .padStart(2, '0')
  const minutes = (period % MINUTES_IN_HOUR).toString().padStart(2, '0')

  return `${hours}:${minutes}`
}
