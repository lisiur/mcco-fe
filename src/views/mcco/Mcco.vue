<template>
  <div class="mcco-view">
    <iframe src="./doc/index.html" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  methods: {
    async func(data) {
      const promise = new Promise(resolve => {
        this.getRealName(data)
        .then(realName => {
          this.$set(promise, 'realName', realName)
          resolve(realName)
        })

      })
      return promise
    }
  },
}
</script>

<style lang="less" scoped>
.mcco-view {
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
