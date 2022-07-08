<script setup>
import { useAuthStore } from 'stores/useAuthStore'
import UserAccountMenu from './UserAccountMenu.vue'

const authStore = useAuthStore()
</script>

<template>
  <q-toolbar>
    <q-toolbar-title>Bobs Building Bit 'n Bobs</q-toolbar-title>

    <q-btn
      unelevated
      outline
      color="white"
      :label="authStore.name"
    >
      <UserAccountMenu />
    </q-btn>
  </q-toolbar>
</template>
