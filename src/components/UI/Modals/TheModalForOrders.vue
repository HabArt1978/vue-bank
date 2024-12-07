<script setup lang="ts">
import { useModalStore } from '@/stores/index'
import { computed } from 'vue'

const modalStore = useModalStore()
const isModalActive = computed(() => modalStore.modal)
const setModal = modalStore.setModal
</script>

<template>
  <div class="pa-4 text-center">
    <v-dialog
      v-model="isModalActive"
      max-width="600"
    >
      <v-card
        prepend-icon="mdi-account"
        title="User Profile"
      >
        <v-card-text>
          <v-row dense>
            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                label="First name*"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                hint="example of helper text only on focus"
                label="Middle name"
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                hint="example of persistent helper text"
                label="Last name*"
                persistent-hint
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                label="Email*"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                label="Password*"
                type="password"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                label="Confirm Password*"
                type="password"
                required
              />
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-select
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Age*"
                required
              />
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-autocomplete
                :items="[
                  'Skiing',
                  'Ice hockey',
                  'Soccer',
                  'Basketball',
                  'Hockey',
                  'Reading',
                  'Writing',
                  'Coding',
                  'Basejump'
                ]"
                label="Interests"
                auto-select-first
                multiple
              />
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis"
            >* - Поле обязательное для заполнения</small
          >
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />

          <v-btn
            text="Close"
            variant="plain"
            @click="setModal(false)"
          />

          <v-btn
            color="primary"
            text="Save"
            variant="tonal"
            @click="setModal(false)"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
