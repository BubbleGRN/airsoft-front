<template>
  <v-navigation-drawer permanent>
    <v-list>
      <v-list-item :prepend-avatar="user.avatar" :title="user.account"></v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="nav in navs" :key="nav.to" :prepend-icon="nav.icon" :title="nav.text" :to="nav.to"></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-main>
    <router-view></router-view>
  </v-main>
</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from '@/stores/user';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const user = useUserStore()

const navs = computed(() => {
  return [
    { to: '/admin/products', text: t('nav.adminProducts'), icon: 'mdi-shopping' },
    { to: '/admin/orders', text: t('nav.adminOrders'), icon: 'mdi-format-list-bulleted' },
    { to: '/', text: t('nav.home'), icon: 'mdi-home' },
  ]
})
</script>
