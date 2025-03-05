<template>
  <v-container>
    <v-row style="position: relative; top: 80px">
      <v-col cols="12">
        <h1 class="text-center">{{ $t('nav.rent') }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<route lang="yaml">
meta:
  layout: account
  login: true
  admin: false
  title: 'nav.joinedActivity'
</route>
