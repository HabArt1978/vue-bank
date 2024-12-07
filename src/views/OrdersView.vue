<script setup lang="ts">
import TheRequestTable from '@/components/request/TheRequestTable/TheRequestTable.vue'
import ThePageCardContainer from '@/components/ThePageCardContainer/ThePageCardContainer.vue'
import TheModalForOrders from '@/components/UI/Modals/TheModalForOrders.vue'
import { useModalStore } from '@/stores/index'
import { computed } from 'vue'

const modalStore = useModalStore()
const isModalActive = computed(() => modalStore.modal)
const setModal = modalStore.setModal
</script>

<template>
  <Teleport
    v-if="isModalActive"
    defer
    to="body"
  >
    <TheModalForOrders />
  </Teleport>

  <ThePageCardContainer title="Список заявок">
    <template #header-button>
      <v-btn
        variant="outlined"
        class="my-auto"
        @click="setModal(true)"
      >
        <p class="font-weight-bold">Добавить</p>
      </v-btn>
    </template>

    <TheRequestTable :clients-data="[]" />
  </ThePageCardContainer>
</template>
