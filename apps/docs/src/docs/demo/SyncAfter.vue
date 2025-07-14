<template>
  <!-- #region template -->
  <BFormCheckbox
    v-model="checked"
    v-model:indeterminate="indeterminate"
  >
    Кликните меня, чтобы увидеть результат
  </BFormCheckbox>
  <!-- #endregion template -->
</template>

<script setup lang="ts">
import {ref} from 'vue'
const checked = ref(false)
const indeterminate = ref(false)
</script>
