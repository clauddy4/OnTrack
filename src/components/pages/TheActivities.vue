<script setup>
import ActivityItem from '@/components/ActivityItem.vue'
import { isActivityValid, validateActivities } from '@/helpers/validators'
import TheActivityForm from '@/components/TheActivityForm.vue'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  }
})

const emit = defineEmits({
  deleteActivity: isActivityValid,
  createActivity: isActivityValid
})
</script>

<template>
  <div>
    <ul class="divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>
