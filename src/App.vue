<script setup lang="ts">
import { onMounted } from '@vue/runtime-core';
import ButtonDemoMarkdown from './components/button.md'
import Prism from 'prismjs';

onMounted(() => {
  Prism.highlightAll()
})

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <ButtonDemoMarkdown />
</template>

<style>
#app {
  width: 450px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
