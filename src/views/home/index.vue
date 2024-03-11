<template>
  <div class="app-container">
    <div class="app-container-inner"></div>
  </div>
</template>
<script setup lang="ts">
import { testInterface } from '@/api/user';

 // test接口
      testInterface({distributionSite: '1' }).then(res => {
        console.log("res",res);
      }).finally(() => {
        console.log("123131231");
      })

</script>

<style scoped lang="scss">
@import "./index";
</style>
