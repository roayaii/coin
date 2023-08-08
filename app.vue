<template>
  <div dir="rtl">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage class="pt-[88px]" :key="$route.fullPath" />
      <LazyLoading :active="loady">
      </LazyLoading>
    </NuxtLayout>
  </div>
</template>

<script setup >
const { loady } = useLoading()
</script>

<style>
</style>