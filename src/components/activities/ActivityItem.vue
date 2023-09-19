<script setup>
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '@/helpers/constants'
import { ICON_TRASH } from '@/helpers/icons'
import { isActivityValid } from '@/helpers/validators'
import { updateActivity, deleteActivity } from '@/helpers/activities'
import { timelineItems, resetTimelineItemActivities } from '@/helpers/timeline-items'
import BaseButton from '../ui/BaseButton.vue'
import BaseIcon from '../ui/BaseIcon.vue'
import BaseSelect from '../ui/BaseSelect.vue'
import RemainingActivitySeconds from './RemainingActivitySeconds.vue'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

function deleteAndResetActivity(activity) {
  resetTimelineItemActivities(timelineItems.value, activity)
  deleteActivity(activity)
}
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="deleteAndResetActivity(activity)">
        <BaseIcon :name="ICON_TRASH" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        class="grow font-mono"
        placeholder="hh:mm"
        :options="PERIOD_SELECT_OPTIONS"
        :selected="activity.secondsToComplete || null"
        @select="updateActivity(activity, { secondsToComplete: $event || 0 })"
      />
      <RemainingActivitySeconds v-if="activity.secondsToComplete" :activity="activity" />
    </div>
  </li>
</template>
