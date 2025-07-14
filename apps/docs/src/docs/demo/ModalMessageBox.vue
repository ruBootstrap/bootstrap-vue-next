<template>
  <div>
    <BButton @click="okBox">Показать сообщение</BButton>
    <div>Результат: {{ okResult }}</div>
  </div>
</template>

<script setup lang="ts">
import {useModalController} from 'bootstrap-vue-next'
import {ref} from 'vue'

const {show} = useModalController()

const okResult = ref<boolean | null | undefined>(undefined)

const okBox = async () => {
  okResult.value = await show?.({
    props: {
      body: 'Это информационное сообщение',
      title: 'Сообщение',
      okOnly: true,
    },
  })
}
</script>
