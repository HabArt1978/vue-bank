<script setup lang="ts">
import type { ClientData } from './types'

defineProps<{
  clientsData: ClientData[]
}>()
</script>

<template>
  <h4
    v-if="!clientsData.length"
    class="text-center text-grey-darken-2"
  >
    Заявок пока нет
  </h4>

  <v-table v-else>
    <thead>
      <tr>
        <th class="text-left">#</th>
        <th class="text-left">ФИО</th>
        <th class="text-left">Телефон</th>
        <th class="text-left">Сумма</th>
        <th class="text-left">Статус</th>
        <th class="text-left">Действие</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
    </tbody>
  </v-table>
</template>
