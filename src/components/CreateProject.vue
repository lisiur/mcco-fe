<template>
  <div class="create-project-comp">
    <el-form :model="model" v-if="model">
      <el-form-item label="项目名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    model: {
      type: Object
    }
  }
}
</script>
