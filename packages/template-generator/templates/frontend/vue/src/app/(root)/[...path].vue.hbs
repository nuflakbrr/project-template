<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import ErrorState from '@/components/Common/ErrorState.vue'
import { useSeo } from '@/hooks/useSeo'

const route = useRoute()

const errorCode = computed(() => {
  const path = route.params.path as string[]
  // Detection logic: check if the first path segment is 'error' and has a second segment
  if (path && path[0] === 'error' && path[1]) {
    const code = parseInt(path[1])
    return isNaN(code) ? 404 : code
  }
  return 404
})

watchEffect(() => {
  useSeo({
    title: `Error ${errorCode.value}`,
    description: `Terjadi kesalahan dengan kode ${errorCode.value}.`,
  })
})

const errorMessage = computed(() => {
  const path = route.params.path as string[]
  if (path && path[0] === 'error' && path[1] && path[2]) {
    return path[2]
  }
  return undefined
})
</script>

<template>
  <MainLayout>
    <ErrorState
      :code="errorCode"
      :error="errorMessage ? { name: 'Error', message: errorMessage } : undefined"
    />
  </MainLayout>
</template>
