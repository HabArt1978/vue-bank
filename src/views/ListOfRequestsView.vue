<script setup lang="ts">
import TheRequestTable from '@/components/request/TheRequestTable/TheRequestTable.vue'
import ThePageCardContainer from '@/components/ThePageCardContainer/ThePageCardContainer.vue'
import TheLoader from '@/components/UI/Loader/TheLoader.vue'
import TheModalForSubmitRequest from '@/components/UI/Modals/TheModalForSubmitRequest.vue'
import { useModalStore, useRequestStore } from '@/stores/index'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

const modalStore = useModalStore()
const { requests } = storeToRefs(useRequestStore())
const { getClientRequests } = useRequestStore()
const setModal = modalStore.setModal

const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true
  await getClientRequests()
  isLoading.value = false
})
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

      <TheLoader v-if="isLoading" />

      <TheRequestTable
        v-else
        :clients-data="requests"
      />
    </ThePageCardContainer>
  </div>
</template>
