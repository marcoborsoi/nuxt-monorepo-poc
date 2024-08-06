<script setup lang="ts">
import { useWindow } from '@myorg/shared-ui'

useWindow()
</script>

<template>
  <div class="v-featured-container">
    <slot />
  </div>
</template>

<style>
.v-featured-container {
  border: 1px solid #999;
  margin: 1rem;
  padding: 2rem;
}
</style>
