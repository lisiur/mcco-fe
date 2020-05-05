<template>
  <div class="project-card-comp">
    <div class="header">
      <div class="name">{{model.name}}</div>
    </div>
    <div class="meta">
      <div>@{{model.creator.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    model: {
      type: Object,
    }
  }
}
</script>

<style lang="less" scoped>
.project-card-comp {
  .header {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
