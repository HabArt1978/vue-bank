<script setup lang="ts">
import { useAlertStore } from '@/stores/index'
import { computed } from 'vue'

const alertStore = useAlertStore()
const alertMessage = computed(() => alertStore.alertMessage?.message)
const alertType = computed(() => alertStore.alertMessage?.messageType)
const setAlertMessage = alertStore.setAlertMessage
const isAlertVisible = computed(() => (alertMessage.value ? true : false))
</script>

<template>
  <v-alert
    v-model="isAlertVisible"
    title="Ошибка!"
    :type="alertType"
    border="start"
    variant="tonal"
    class="alertContainer"
  >
    <p>{{ alertMessage }}</p>
    <template #close>
      <v-btn
        icon="mdi-close"
        size="small"
        color="red-darken-4"
        class="alertCloseButton"
        @click="setAlertMessage(null)"
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
  z-index: 10;
}

.alertCloseButton {
  position: relative;
  top: -10px;
  right: -10px;
}
</style>
