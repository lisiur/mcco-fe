<template>
  <div class="project-materiel-card-comp">
    <div class="header">
      <div class="name">{{model.name}}</div>
    </div>
    <div class="body">
      <div class="item">
        <div class="label">物料名称</div>
        <div class="value">{{model.materiel.name}}</div>
      </div>
      <div class="item">
        <div class="label">物料版本</div>
        <div class="value">
          {{model.materielVer.version}}
          <a>更换版本</a>
        </div>
      </div>
      <div class="item">
        <div class="label">添加人</div>
        <div class="value">{{model.operator.name}}</div>
      </div>
    </div>
    <div class="footer">
      <el-button></el-button>
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

<style>

</style>