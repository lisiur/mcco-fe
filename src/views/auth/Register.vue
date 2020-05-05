<template>
  <div class="register-view">
    <el-form :model="model" class="form">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onRegister">注册</el-button>
        <el-button @click="goLogin">前往登录</el-button>
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
    async onRegister() {
      const {username} = (await this.$service.register(this.model)).data.data
      this.$store.commit('changeUser', {username})
      this.$router.push({name: 'Home'})
    },
    goLogin() {
      this.$router.push({name: 'Login'})
    },
  },
}
</script>

<style lang="less" scoped>
.register-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .form {
    width: 480px;
  }
}
</style>
