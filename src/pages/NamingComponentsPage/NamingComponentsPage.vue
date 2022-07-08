<!-- Name components based on their underlying Quasar component -->
<script setup>
import comments from './sampleComments'
import UserComments from './UserComments.vue'
</script>

<template>
  <q-page padding>
    <UserComments
      style="max-width: 550px;"
      :comments="comments"
    />
  </q-page>
</template>
