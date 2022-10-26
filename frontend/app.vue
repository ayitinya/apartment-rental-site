<script setup lang="ts">
// const {data} = await useFetch('/api/apartments/dBzl9WllHJdQ7eKhDTRw')
const {data} = await useFetch('/api/apartments')
console.log(data.value)
</script>
<template>
  <NuxtLayout>
    <div>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
</style>