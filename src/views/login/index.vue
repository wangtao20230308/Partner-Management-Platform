<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-left">
        <img src="@/assets/image/login/allipayIcon.png" >
      </div>
      <div class="login-form">
        <div class="login-title">
          <img class="icon" src="@/assets/jpay.jpg" alt="logo" />
          <h2 class="title">合作方管理平台</h2>
        </div>
        <LoginForm/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import LoginForm from './components/LoginForm.vue'
  import SwitchDark from '@/components/SwitchDark/index.vue'
</script>
<style lang="scss" scoped>
  @import "./index";
</style>
