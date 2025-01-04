<script setup lang="ts">
import { Money3Component as VMoney } from 'v-money3'
import { computed, nextTick, ref, useTemplateRef, watch } from 'vue'

const vMoneyRef = useTemplateRef('vMoneyRef')
const maskConfig = {
  decimal: ',',
  thousands: ' ',
  prefix: '',
  suffix: '',
  precision: 2,
  masked: true /* doesn't work with directive */
}

type VModelType = string | number | null | undefined
const vModel = defineModel<VModelType>({
  default: null
})
const vModelNumber = defineModel<number | null>('number', {
  default: null
})

const vMoneyValue = computed<string | number>({
  get: () => vModel.value ?? '',
  set: (v) => (vModel.value = v === '' ? null : v)
})
const formattedValue = ref<string>(String(vModel.value))

watch(vModel, setVModelNumber, { immediate: true })
watch(vModelNumber, setVModelNumber, { immediate: true })

async function setVModelNumber(value: VModelType): Promise<void> {
  if (value === '' || value === null || value === undefined) {
    formattedValue.value = ''
    vModelNumber.value = vModel.value = null
    return
  }

  if (vModel.value !== value) {
    vModel.value = value
  }

  if (vModelNumber.value !== value) {
    await nextTick()
    const vMoneyValue = vMoneyRef.value?.$el.value
    formattedValue.value = vMoneyValue
    vModelNumber.value = parseFloat(
      vMoneyValue.replace(/\s/g, '').replace(/,/g, '.')
    )
  }
}
</script>

<template>
  <v-text-field
    v-bind="$attrs"
    :model-value="formattedValue"
    @input="setVModelNumber($event.target.value)"
  />

  <VMoney
    ref="vMoneyRef"
    v-show="false"
    v-bind="maskConfig"
    v-model="vMoneyValue"
  />
</template>
