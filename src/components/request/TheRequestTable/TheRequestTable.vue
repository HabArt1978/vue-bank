<script setup lang="ts">
import { ref } from 'vue'

const desserts = ref([
  {
    name: 'Frozen Yogurt',
    calories: 159
  },
  {
    name: 'Ice cream sandwich',
    calories: 237
  },
  {
    name: 'Eclair',
    calories: 262
  },
  {
    name: 'Cupcake',
    calories: 305
  },
  {
    name: 'Gingerbread',
    calories: 356
  },
  {
    name: 'Jelly bean',
    calories: 375
  },
  {
    name: 'Lollipop',
    calories: 392
  },
  {
    name: 'Honeycomb',
    calories: 408
  },
  {
    name: 'Donut',
    calories: 452
  },
  {
    name: 'KitKat',
    calories: 518
  }
])
</script>

<template>
  <h4 v-if="!desserts.length">Заявок пока нет</h4>

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
