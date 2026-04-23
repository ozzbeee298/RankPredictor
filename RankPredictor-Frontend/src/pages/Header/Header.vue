<template>
  <header class="header">
    <div class="header__logo">
      Logo
    </div>
  </header>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const testEl = document.querySelector(".test");
    console.log('you smell')
  if (testEl) {
    console.log("✅ .test element found:", testEl);
  } else {
    console.log("❌ .test element not found");
  }
});
</script>