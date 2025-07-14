<template>
  <div>
    <BButton @click="confirmBox">Показать подтверждение</BButton>
    <div>Результат: {{ confirmResult ?? 'null' }}</div>
  </div>
</template>

<script setup lang="ts">
import {useModalController} from 'bootstrap-vue-next'
import {ref} from 'vue'

const {confirm} = useModalController()
const confirmResult = ref<boolean | null | undefined>(null)

const confirmBox = async () => {
  confirmResult.value = await confirm?.({
    props: {
      body: 'Вы уверены, что хотите это сделать?',
      title: 'Подтверждение',
      okTitle: 'Да',
      cancelTitle: 'Нет',
    },
  })
}
</script>
