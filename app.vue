<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <ApiError/>
</template>

<script lang="ts" setup>
import type { keyPressEvent } from '~/helpers/interfaces'
import { keyPress, keyPressCode } from '~/store/common'
import ApiError from '~/widgets/ApiError.vue'

onMounted(() => {

  const onKeyPress = ($event: keyPressEvent) => {
    keyPressCode.value = $event.keyCode
    keyPress.value++
  }

  window.addEventListener('keyup', onKeyPress)
})
</script>
