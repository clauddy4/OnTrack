<script setup>
import { PAGE_TIMELINE } from '@/helpers/constants'
import { currentPage, navigate } from '@/router/router'
import { scrollToCurrentHour } from '@/helpers/timeline-items'

function handleClick() {
  currentPage.value === PAGE_TIMELINE ? scrollToCurrentHour(true) : navigate(PAGE_TIMELINE)
}
</script>

<template>
  <a :href="`#${PAGE_TIMELINE}`" @click="handleClick">
    <img src="../../assets/img/logo.png" alt="Logo" class="h-9" />
  </a>
</template>
