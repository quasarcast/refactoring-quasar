<script setup>
import { mdiFolder } from '@quasar/extras/mdi-v6'
import iconsMap from './iconsMap'

function makeFolder (name, children = [], color = 'primary') {
  return {
    label: name,
    icon: mdiFolder,
    iconColor: color,
    children,
  }
}

function makeFile (name, color = 'grey-10') {
  const fileExtension = name.split('.')?.[1]

  const icon = iconsMap[fileExtension] || iconsMap.default

  return {
    label: name,
    img: icon,
    iconColor: color,
  }
}

function makeModelDirectory (modelName) {
  return makeFolder(modelName, [
    // Components
    makeFolder('components', [
      makeFolder('ManagePostsTable', [
        makeFolder('__test__', [
          makeFile('manage-posts-table-test.cy.ts'),
        ]),
        makeFile('ManagePostsTable.vue'),
        makeFile('ManagePostsTableRows.vue'),
        makeFile('calculateSummaryRow.js'),
        makeFile('columns.js'),
      ]),
    ]),

    // Sample Data
    makeFolder('sample-data', [
      makeFile('post-find-rest-response.json'),
      makeFile('post-index-rest-response.json'),
    ]),

    // Types
    makeFolder('types', [
      makeFile('Post.ts'),
    ]),

    // Views
    makeFolder('views', [
      makeFile('ManagePostsView.vue'),
      makeFile('FilterPostsView.vue'),
    ]),

    // Schema
    makeFile('PostSchema.json'),
  ])
}

const folderStructure = [
  {
    ...makeFolder('src'),
    children: [
      makeFolder('assets'),
      makeFolder('boot'),
      makeFolder('components'),
      makeFolder('css'),
      makeFolder('layout'),
      makeFolder('models', [
        makeModelDirectory('Post'),
      ], 'accent'),
      makeFolder('pages'),
      makeFolder('router'),
      makeFolder('stores'),
    ],
  },
]
</script>

<template>
  <div class="q-pa-md q-gutter-sm">
    <q-tree
      default-expand-all
      :nodes="folderStructure"
      node-key="label"
      no-connectors
    />
  </div>
</template>

<style>
.q-tree__img {
  width: 21px;
  height: 21px;
}
</style>
