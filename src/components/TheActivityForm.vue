<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { isActivityValid } from '@/helpers/validators'
import { ref, nextTick } from 'vue'

const emit = defineEmits({
  submit: isActivityValid
})

async function submit() {
  emit('submit', activity.value)
  activity.value = ''
  await nextTick()
  window.scrollTo(0, document.body.scrollHeight)
}

const activity = ref('')
</script>

<template>
  <form @submit.prevent="submit" class="sticky flex gap-2 border-t bg-white p-4 bottom-[57px]">
    <input
      v-model="activity"
      type="text"
      placeholder="Activity name"
      class="w-full rounded border px-4 text-xl"
    />
    <BaseButton :disabled="activity.trim() === ''">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
