<template>
  <div class="login-view">
    <el-form :model="model" class="form">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click="goRegister">前往注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    async onSubmit() {
      await this.$service.login(this.model)
      this.$router.push({name: 'Home'})
    },
    goRegister() {
      this.$router.push({name: 'Register'})
    },
  },
}
</script>

<style lang="less" scoped>
.login-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .form {
    width: 480px;
  }
}
</style>
