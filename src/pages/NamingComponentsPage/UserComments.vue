<script setup>
defineProps({
  comments: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <q-list>
    <q-item
      v-for="comment in comments"
      :key="comment.id"
    >
      <q-item-section avatar>
        <q-avatar>
          <img :src="comment.avatarSrc">
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label caption>
          {{ comment.commenterName }}
        </q-item-label>
        <q-item-label>
          {{ comment.body }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>
