<script setup>
import axios from 'axios'
import { ref } from 'vue'
import columns from './columns'

const users = ref([])

async function fetchUsers () {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  users.value = response.data
}

fetchUsers()
</script>

<template>
  <q-table
    title="Users"
    :loading="!users"
    :rows="users"
    :columns="columns"
  />
</template>
