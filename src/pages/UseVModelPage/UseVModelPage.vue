<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  fav_potato: '',
})
</script>

<template>
  <q-page padding>
    <q-card style="max-width: 550px">
      <q-card-section>
        <q-form class="q-gutter-y-md">
          <q-input
            v-model="form.name"
            filled
            label="Name"
          />
          <q-input
            v-model="form.email"
            filled
            label="Email"
          />
          <q-select
            v-model="form.fav_potato"
            filled
            :options="['Yukon Gold', 'Russet', 'Laura', 'Vitelotte', 'Kennebec']"
            label="Favourite Type Of Potato"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
