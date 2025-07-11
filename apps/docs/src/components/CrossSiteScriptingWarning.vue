<template>
  <BAlert :model-value="true" variant="danger">
    <strong>Будьте осторожны</strong> при размещении пользовательского контента в поле
    <code>html</code>, так как это может сделать вас уязвимыми к
    <BLink
      target="_blank"
      rel="noopener"
      variant="info"
      href="https://en.wikipedia.org/wiki/Cross-site_scripting"
    >
      <abbr title="Cross Site Scripting Attacks">XSS-атакам</abbr> </BLink
    >, если вы предварительно не
    <BLink
      variant="info"
      href="https://en.wikipedia.org/wiki/HTML_sanitization"
      target="_blank"
      rel="noopener"
    >
      санитизируете</BLink
    >
    пользовательскую строку.
  </BAlert>
</template>

<script setup lang="ts">
import {BAlert, BLink} from 'bootstrap-vue-next'
</script>
