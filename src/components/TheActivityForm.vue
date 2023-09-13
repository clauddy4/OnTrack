<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import { ref, nextTick } from 'vue'
import { id } from '@/helpers/functions'
import { createActivity } from '@/activities'
import BaseIcon from '@/components/ui/BaseIcon.vue'

async function submit() {
  createActivity({
    id: id(),
    name: activityName.value,
    secondsToComplete: 0
  })
  activityName.value = ''
  await nextTick()
  window.scrollTo(0, document.body.scrollHeight)
}

const activityName = ref('')
</script>

<template>
  <form @submit.prevent="submit" class="sticky flex gap-2 border-t bg-white p-4 bottom-[57px]">
    <input
      v-model="activityName"
      type="text"
      placeholder="Activity name"
      class="w-full rounded border px-4 text-xl"
    />
    <BaseButton :disabled="activityName.trim() === ''">
      <BaseIcon name="Plus" class="h-8" />
    </BaseButton>
  </form>
</template>
