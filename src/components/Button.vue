<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Button Code...')
</script>

<template>
  <button class="button">
    <span>{{ message }}</span> 
  </button>
</template>

<style>
.button {
  color: #ffffff;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  padding: 6px 12px;
  background-color: #2196f3;
}
.button:hover {
  background-color: #48a8f5;
}
.button:active {
  background-color: #0c82df;
}
</style>
