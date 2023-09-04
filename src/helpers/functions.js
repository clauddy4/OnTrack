import {
  HOURS_IN_DAY,
  SECONDS_IN_HOUR,
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  MILLISECONDS_IN_SECOND
} from '@/helpers/constants'
import { isNull } from '@/helpers/validators'

export function generateActivities() {
  return ['Coding', 'Reading', 'Training'].map((name, hours) => ({
    id: id(),
    name,
    secondsToComplete: hours * SECONDS_IN_HOUR
  }))
}

export function getTotalActivitySeconds(activity, timelineItems) {
  return timelineItems
    .filter((timelineItem) => timelineItem.activityId === activity.id)
    .reduce(
      (totalSeconds, timelineItem) => Math.round(timelineItem.activitySeconds + totalSeconds),
      0
    )
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

export function formatSeconds(seconds) {
  const date = new Date()
  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECOND)
  const utc = date.toUTCString()

  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}

export function generatePeriodSelectOptions() {
  const periodsInMinutes = [15, 30, 45, 60, 90, 120, 150, 180, 240]

  return periodsInMinutes.map((period) => ({
    value: period * SECONDS_IN_MINUTE,
    label: generatePeriodLabel(period)
  }))
}

export function currentHour() {
  return new Date().getHours()
}

function generatePeriodLabel(period) {
  const hours = Math.floor(period / MINUTES_IN_HOUR)
    .toString()
    .padStart(2, '0')
  const minutes = (period % MINUTES_IN_HOUR).toString().padStart(2, '0')

  return `${hours}:${minutes}`
}
