<script setup lang="ts">
import type { PageCardContainerProps } from './types'

const props = defineProps<PageCardContainerProps>()

document.title = `${props.title} | Bank Application`
</script>

<template>
  <v-card
    class="mx-auto my-8"
    elevation="16"
    max-width="50vw"
  >
    <div class="d-flex justify-space-between mx-4 my-4">
      <p class="text-h4 text-blue-darken-3 line">{{ props.title }}</p>

      <slot name="header-button" />
    </div>

    <div class="mx-4 my-4">
      <slot />
    </div>
  </v-card>
</template>
