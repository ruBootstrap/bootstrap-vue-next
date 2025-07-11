<template>
  <NoteAlert>
    Для корректной работы необходимо инициализировать плагин createBootstrap. Подробнее читайте
    <BLink :to="withBase('/docs#install')">здесь</BLink>
  </NoteAlert>
</template>

<script setup lang="ts">
import {BLink} from 'bootstrap-vue-next'
import NoteAlert from './NoteAlert.vue'
import {withBase} from 'vitepress'
</script>
