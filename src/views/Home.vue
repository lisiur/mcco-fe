<template>
  <div class="frame">
    <el-container class="frame-container">
      <el-header class="frame-header">
        <el-menu
          router
          mode="horizontal"
          active-text-color="teal"
          :default-active="defaultActive"
          class="frame-header-menu"
          >
          <el-menu-item index="/">
            <i class="el-icon-s-home"></i>
            首页
          </el-menu-item>
          <el-menu-item index="/materiel/pc">
            <i class="el-icon-s-platform"></i>
            PC
          </el-menu-item>
          <el-menu-item index="/materiel/mobile">
            <i class="el-icon-mobile-phone"></i>
            Mobile
          </el-menu-item>
          <el-menu-item index="/project">
            <i class="el-icon-s-management"></i>
            项目
          </el-menu-item>
        </el-menu>
        <div class="frame-header-person">
          <el-dropdown placement="bottom" @command="onCommand">
            <el-avatar
              size="medium"
              style="cursor: pointer;"
            >
              {{username[0].toUpperCase()}}
            </el-avatar>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="accessToken">AccessToken</el-dropdown-item>
              <el-dropdown-item command="logout" divided>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main class="frame-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import copyTextToClipboard from '@/utils/copyTextToClipboard'
export default {
  computed: {
    defaultActive() {
      const routePath = this.$route.path
      if (routePath.startsWith('/project')) {
        return '/project'
      } else if (routePath.startsWith('/materiel/pc')) {
        return '/materiel/pc'
      } else if (routePath.startsWith('/materiel/mobile')) {
        return '/materiel/mobile'
      } else {
        return '/'
      }
    },
    username() {
      return this.$store.getters.user.username
    }
  },
  provide() {
    return {
      user: this.$store.getters.user
    }
  },
  methods: {
    async onCommand(commond) {
      switch(commond) {
        case 'accessToken': {
          const {token} = (await this.$service.getAccessToken()).data.data
          copyTextToClipboard(token).then(() => {
            this.$notify.success('已复制到剪切板')
          }).catch(err => {
            this.$message.error(err.message)
          })
          break
        }
        case 'logout':
          await this.$service.logout()
          this.$router.replace({name: 'Login'})
          break
        default:
          return
      }
    },
  },
}
</script>

<style lang="less" scoped>
.frame {
  height: 100%;
  .frame-container {
    height: 100%;
    .frame-header {
      display: flex;
      align-items: center;
      &-menu {
        width: 100%;
      }
      &-person {
        position: absolute;
        right: 32px;
      }
    }
  }
}
</style>