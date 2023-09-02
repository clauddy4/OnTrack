<script setup>
import { PAGE_TIMELINE } from '@/helpers/constants'
import { navigate } from '@/router'
</script>

<template>
  <a :href="`#${PAGE_TIMELINE}`" @click="navigate(PAGE_TIMELINE)">
    <img src="../assets/images/logo.png" alt="onTrack" class="h-9" />
  </a>
</template>
