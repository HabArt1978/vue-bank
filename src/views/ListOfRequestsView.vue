<script setup lang="ts">
import TheRequestTable from '@/components/request/TheRequestTable/TheRequestTable.vue'
import ThePageCardContainer from '@/components/ThePageCardContainer/ThePageCardContainer.vue'
import TheModalForSubmitRequest from '@/components/UI/Modals/TheModalForSubmitRequest.vue'
import { useModalStore } from '@/stores/index'

const modalStore = useModalStore()
const setModal = modalStore.setModal
</script>

<template>
  <div>
    <Teleport
      defer
      to="body"
    >
      <TheModalForSubmitRequest />
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
  </div>
</template>
