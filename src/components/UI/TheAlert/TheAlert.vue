<script setup lang="ts">
import { useAlertStore } from '@/stores/index'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const alertStore = useAlertStore()
const { alert } = storeToRefs(alertStore)
const isAlertVisible = computed(() => !!alertStore.alert)
const { setAlert } = alertStore
</script>

<template>
  <v-alert
    v-model="isAlertVisible"
    :title="alert?.alertTitle"
    :type="alert?.messageType"
    border="start"
    variant="tonal"
    class="alertContainer"
  >
    <p class="breakAllWord">{{ alert?.message }}</p>

    <template #close>
      <v-btn
        icon="mdi-close"
        size="small"
        color="darken-red-4"
        class="alertCloseButton"
        @click="setAlert(null)"
      />
    </template>
  </v-alert>
</template>

<style scoped>
.alertContainer {
  position: absolute;
  top: 85px;
  right: 1%;
  width: 25vw;
  z-index: 1000;
}

.alertCloseButton {
  position: relative;
  top: -10px;
  right: -8px;
}

.breakAllWord {
  word-break: break-all;
}
</style>
