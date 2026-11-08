<script setup lang="ts">
import CardData from './modules/card-data.vue';
import HeaderBanner from './modules/header-banner.vue';
import ProjectNews from './modules/project-news.vue';
</script>

<template>
  <div class="h-full flex-col gap-16px overflow-hidden">
    <HeaderBanner class="flex-none" />
    <CardData class="flex-none" />
    <ProjectNews class="min-h-0 flex-1" />
  </div>
</template>

<style scoped></style>
