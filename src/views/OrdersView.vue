<script setup lang="ts">
import ThePageCardContainer from '@/components/ThePageCardContainer/ThePageCardContainer.vue'
import TheRequestTable from '@/components/request/TheRequestTable/TheRequestTable.vue'
</script>

<template>
  <ThePageCardContainer title="Список заявок">
    <template #header-button>
      <v-btn
        variant="outlined"
        class="my-auto"
      >
        <p class="font-weight-bold">Добавить</p>
      </v-btn>
    </template>

    <TheRequestTable :clients-data="[]" />
  </ThePageCardContainer>
</template>
