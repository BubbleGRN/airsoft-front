<template>
  <v-container class="backgroundIMG" style="margin-left: 0px; margin-right: 0px; max-width: 1903px;">
    <v-row style="position: relative; top: 80px;">
      <v-col cols="12">
        <h1 class="text-center">{{ $t('nav.cart') }}</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-list lines="two" :style="cart.length === 0 ? { background: 'transparent' } : { border: '5px solid #7A9A5E' }">
          <v-container v-if="cart.length === 0" class="text-center">
            <v-alert type="info" color="grey lighten-4" class="ma-4">
              無資料，可至商城購買物品
            </v-alert>
          </v-container>
          <template v-for="(item, i) in cart" :key="item._id">
            <v-list-item
              :title="item.product.name"
              :subtitle="item.product.price"
              active-class="bg-red"
              :active="!item.product.sell"
            >
              <template #prepend>
                <v-avatar rounded="0">
                  <v-img :src="item.product.image"></v-img>
                </v-avatar>
              </template>
              <template #append>
                <v-btn
                  color="red"
                  icon="mdi-minus"
                  size="small"
                  class="mr-2"
                  @click="editCart(item.product._id, -1)"
                ></v-btn>
                {{ item.quantity }}
                <v-btn
                  color="green"
                  icon="mdi-plus"
                  size="small"
                  class="ml-2"
                  @click="editCart(item.product._id, 1)"
                ></v-btn>
              </template>
            </v-list-item>
            <v-divider v-if="i < cart.length - 1"></v-divider>
          </template>
        </v-list>
      </v-col>
      <v-col cols="12" class="text-center">
        <p>{{ total }}</p>
        <v-btn color="primary" :disabled="!canCheckout" @click="checkout">{{
          $t('cart.checkout')
        }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAxios } from '@/composables/axios'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
import { useI18n } from 'vue-i18n'

const { apiAuth } = useAxios()
const user = useUserStore()
const router = useRouter()
const createSnackbar = useSnackbar()
const { t } = useI18n()

const cart = ref([])

const getCart = async () => {
  try {
    const { data } = await apiAuth.get('/user/cart')
    cart.value = data.result
  } catch (error) {
    console.log(error)
  }
}
getCart()

const total = computed(() => {
  return cart.value.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
})

const canCheckout = computed(() => {
  return cart.value.length > 0 && cart.value.every((item) => item.product.sell)
})

const editCart = async (product, quantity) => {
  try {
    const { data } = await apiAuth.patch('/user/cart', { product, quantity })
    user.cart = data.result
    getCart()
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: t('api.' + (error?.response?.data?.message || 'unknownError')),
      snackbarProps: {
        color: 'red',
      },
    })
  }
}

const checkout = async () => {
  try {
    await apiAuth.post('/order')
    user.cart = 0
    router.push('/orders')
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: t('api.' + (error?.response?.data?.message || 'unknownError')),
      snackbarProps: {
        color: 'red',
      },
    })
  }
}
</script>

<route lang="yaml">
  meta:
    login: true
    title: 'nav.cart'
  </route>


<style>
.backgroundIMG {
  background: url(../../img/jungle-navbar.png) no-repeat center top;
  width: 100vw;
  height: 100vh;
  background-size: cover;
}
</style>
