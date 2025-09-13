<template>
  <div :class="themeClass">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

/**
 * Theme handler
 * @devs Right now, we only have default theme
 */

const theme = ref("default");
const themeClass = computed(() => {
  return `impact-app theme-${theme.value}`;
});
</script>

<style lang="scss"></style>
