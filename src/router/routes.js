
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'naming-components',
        component: () => import('pages/NamingComponentsPage/NamingComponentsPage.vue'),
      },
      {
        path: 'use-v-model',
        component: () => import('pages/UseVModelPage/UseVModelPage.vue'),
      },
      {
        path: 'agnostic-from-requests',
        component: () => import('pages/AgnosticFromRequestsPage/AgnosticFromRequestsPage.vue'),
      },
      {
        path: 'agnostic-from-state',
        component: () => import('pages/AgnosticFromStatePage/AgnosticFromStatePage.vue'),
      },
      {
        path: 'folder-structure',
        component: () => import('pages/FolderStructurePage/FolderStructurePage.vue'),
      },
      {
        path: 'decouple-styling',
        component: () => import('pages/DecoupleStylingPage/DecoupleStylingPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
