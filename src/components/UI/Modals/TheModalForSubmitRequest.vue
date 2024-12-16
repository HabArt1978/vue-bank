<script setup lang="ts">
import {
  submitRequestSchema,
  type SubmitRequestSchema
} from '@/assets/schemas/submitRequestSchema'
import { useModalStore } from '@/stores/index'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { computed } from 'vue'

const modalStore = useModalStore()
const isModalActive = computed(() => modalStore.modal)
const setModal = modalStore.setModal

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: toTypedSchema(submitRequestSchema),
  initialValues: {
    status: undefined
  }
})

const { value: lastName } = useField('lastName')
const { value: firstName } = useField('firstName')
const { value: middleName } = useField('middleName')
const { value: phone } = useField('phone')
const { value: email } = useField('email')
const { value: amount } = useField('amount')
const { value: status } = useField('status')

const orderStatuses = ['Option 1', 'Option 2', 'Option 3']

const onSubmit = handleSubmit(
  async (submitRequestData: SubmitRequestSchema) => {
    setModal(false)
    console.table(submitRequestData)
    resetForm()
  }
)
</script>

<template>
  <div class="pa-4 text-center">
    <v-dialog
      v-model="isModalActive"
      max-width="600"
    >
      <v-card
        prepend-icon="mdi-receipt-text-plus"
        title="Создать заявку"
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
              :required="false"
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

            <v-text-field
              id="amount"
              v-model="amount"
              name="amount"
              label="Сумма заявки *"
              placeholder="от 10.000р до 1.000.000р"
              type="number"
              min="10000"
              max="1000000"
              step="1"
              :error-messages="errors.amount"
              class="marginBottom"
            />

            <v-select
              id="status"
              v-model="status"
              name="status"
              :items="orderStatuses"
              label="Статус заявки *"
              variant="outlined"
              clearable
              :error="!!errors.status"
              :errors-message="errors.status"
              class="marginBottom"
            />

            <small class="text-caption text-medium-emphasis"
              >* - Поле обязательное для заполнения</small
            >

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
    </v-dialog>
  </div>
</template>

<style scoped>
.marginBottom {
  margin-bottom: 10px;
}
</style>
