<template lang="pug">
div Welcome
    div userTokens {{ userTokens }}
</template>

<script lang="ts" setup>
import { userTokens } from '~/store/common'

</script>