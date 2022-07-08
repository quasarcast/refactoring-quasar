<script setup>
import axios from 'axios'
import { ref } from 'vue'
import columns from './columns'
import { mdiPlus } from '@quasar/extras/mdi-v6'

const users = ref([])

async function fetchUsers () {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  users.value = response.data
}

async function createUser () {
  alert("create em ya'self Luke!")
}

fetchUsers()
</script>

<template>
  <q-table
    title="Users"
    :loading="!users"
    :rows="users"
    :columns="columns"
  >
    <template #top-right>
      <q-btn
        color="accent"
        round
        :icon="mdiPlus"
        @click="createUser"
      />
    </template>
  </q-table>
</template>
