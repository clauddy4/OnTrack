<script setup>
import { routes, currentPage } from '@/router/router'
import TheHeader from '@/components/common/TheHeader.vue'
import TheNav from '@/components/common/TheNav.vue'
</script>

<template>
  <TheHeader />

  <main class="flex flex-grow flex-col">
    <KeepAlive>
      <component :is="routes[currentPage]" />
    </KeepAlive>
  </main>

  <TheNav />
</template>
