<script setup lang="ts">
import type { NewRequestData } from '@/stores/requestStore/types'

defineProps<{
  clientsData: NewRequestData[]
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
      <tr class="text-body-1">
        <th class="text-left">№</th>
        <th class="text-left">ФИО</th>
        <th class="text-left">Телефон</th>
        <th class="text-left">Почта</th>
        <th class="text-left">Сумма</th>
        <th class="text-left">Статус</th>
        <th class="text-left">Действие</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(clientInfo, idx) in clientsData"
        :key="clientInfo.id"
      >
        <td>
          {{ `${idx + 1}` }}
        </td>
        <td>
          {{
            `
             ${clientInfo.lastName}
             ${clientInfo.middleName}
             ${clientInfo.firstName}
            `
          }}
        </td>
        <td>
          {{ `${clientInfo.phone}` }}
        </td>
        <td>
          {{ `${clientInfo.email}` }}
        </td>
        <td>
          {{ `${clientInfo.amount}` }}
        </td>
        <td>
          {{ `${clientInfo.status}` }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
