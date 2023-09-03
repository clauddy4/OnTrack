<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import { isActivityValid } from '@/helpers/validators'
import { BUTTON_TYPE_DANGER } from '@/helpers/constants'
import ActivitySecondsToComplete from '@/components/ActivitySecondsToComplete.vue'
import { inject } from 'vue'
import { periodSelectOptionsKey, deleteActivityKey, setActivitySecondsToCompleteKey } from '@/keys'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const periodSelectOptions = inject(periodSelectOptionsKey)
const deleteActivity = inject(deleteActivityKey)
const setActivitySecondsToComplete = inject(setActivitySecondsToCompleteKey)
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="deleteActivity(activity)">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        :options="periodSelectOptions"
        :selected="activity.secondsToComplete || null"
        placeholder="hh:mm"
        class="font-mono grow"
        @select="setActivitySecondsToComplete(activity, $event)"
      />

      <ActivitySecondsToComplete v-if="activity.secondsToComplete" :activity="activity" />
    </div>
  </li>
</template>
