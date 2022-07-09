<!--
  unexpected behaviour when used in
  different parts of your app
 -->

<script setup>
import ArticleCard from './ArticleCard.vue'
import AdvertsCard from './AdvertsCard.vue'
import ArticleMenu from './ArticleMenu.vue'

</script>

<template>
  <q-page
    class="column"
    padding
  >
    <div class="row q-col-gutter-lg col">
      <ArticleMenu />
      <ArticleCard />
      <AdvertsCard />
    </div>
  </q-page>
</template>
