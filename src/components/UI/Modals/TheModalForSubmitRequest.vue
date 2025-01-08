<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { storeToRefs } from 'pinia'
import { useField, useForm } from 'vee-validate'

import {
  orderStatuses,
  submitRequestSchema,
  type SubmitRequestSchema
} from '@/assets/schemas/submitRequestSchema'
import { useModalStore, useRequestStore } from '@/stores/index'
import MoneyField from '../Form/MoneyField.vue'

const modalStore = useModalStore()
const { modal: isModalActive } = storeToRefs(modalStore)
const { setModal } = modalStore

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: toTypedSchema(submitRequestSchema),
  initialValues: {
    lastName: undefined,
    firstName: undefined,
    middleName: undefined,
    phone: undefined,
    email: undefined,
    amount: 0,
    status: undefined
  }
})

const { value: lastName } = useField('lastName')
const { value: firstName } = useField('firstName')
const { value: middleName } = useField('middleName')
const { value: phone } = useField('phone')
const { value: email } = useField('email')
const { value: amount } = useField<number>('amount')
const { value: status } = useField<undefined | string>('status')

const onSubmit = handleSubmit(
  async (submitRequestData: SubmitRequestSchema) => {
    useRequestStore().createClientRequest(submitRequestData)

    setModal(false)
    resetForm()
  }
)
</script>

<template>
  <v-dialog
    v-model="isModalActive"
    max-width="600"
  >
    <div class="pa-4 text-center">
      <v-card
        prepend-icon="mdi-receipt-text-plus"
        title="Создать заявку"
        class="text-blue-darken-3"
      >
        <v-card-text>
          <v-form
            id="submitRequest"
            fast-fail
            aria-disabled
            @submit.prevent="onSubmit"
          >
            <v-text-field
              id="lastName"
              v-model="lastName"
              name="lastName"
              type="text"
              label="Фамилия *"
              autofocus
              :error-messages="errors.lastName"
              class="marginBottom"
            />

            <v-text-field
              id="firstName"
              v-model="firstName"
              name="firstName"
              label="Имя *"
              type="text"
              :error-messages="errors.firstName"
              class="marginBottom"
            />

            <v-text-field
              id="middleName"
              v-model="middleName"
              name="middleName"
              label="Отчество"
              type="text"
              :error-messages="errors.middleName"
              class="marginBottom"
            />

            <v-text-field
              id="phone"
              v-model="phone"
              name="phone"
              label="Телефон *"
              placeholder="+7-XXX-XXX-XX-XX"
              type="tel"
              :error-messages="errors.phone"
              class="marginBottom"
            />

            <v-text-field
              id="email"
              v-model="email"
              label="Email *"
              name="email"
              placeholder="email@yandex.ru"
              type="email"
              :error-messages="errors.email"
              class="marginBottom"
            />

            <MoneyField
              id="amount"
              v-model:number="amount"
              name="amount"
              label="Сумма заявки *"
              placeholder="от 10.000р до 1.000.000р"
              :error-messages="errors.amount"
              class="marginBottom"
            />

            <v-select
              id="status"
              v-model="status"
              name="status"
              :items="[...orderStatuses, 'Nechto']"
              label="Статус заявки *"
              variant="outlined"
              density="comfortable"
              :error-messages="errors.status"
            />

            <small class="text-caption text-medium-emphasis">
              * - Поле обязательное для заполнения
            </small>

            <v-divider />

            <v-card-actions>
              <v-spacer />

              <v-btn
                text="Закрыть"
                variant="plain"
                @click="setModal(false)"
              />

              <v-btn
                color="primary"
                text="Создать"
                variant="tonal"
                type="submit"
              />
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </v-dialog>
</template>

<style scoped>
.marginBottom {
  margin-bottom: 10px;
}
</style>
