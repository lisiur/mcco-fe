<template>
  <div class="materiel-card-comp">
    <div class="preview">
      <img :src="model.latest.preview" alt="">
    </div>
    <el-divider content-position="left">
      <span style="font-size: 16px;font-weight: bold; margin-right: 4px;">{{model.name}}</span>
      <el-tag size="mini" class="version">{{model.latest.version}}</el-tag>
      <el-button type="text" style="margin-left: 4px;">@{{model.creator.name}}</el-button>
    </el-divider>
    <div class="footer">
      <div class="tags" style="height: 28px;">
        <el-button
          v-for="item in model.tags"
          size="mini"
          type="text"
          style="margin-right: 4px;"
          :key="item">
          #{{item}}
        </el-button>
      </div>
      <div class="meta">
        <span>更新于：{{model.updatedAt | dateFormatter('YYYY/MM/DD')}}</span>
        <span style="margin-left: auto;">使用数：{{model.used}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import dateFormatter from '@/mixins/dateFormatter'
export default {
  mixins: [dateFormatter],
  props: {
    model: {
      type: Object,
    }
  },
}
</script>

<style lang="less" scoped>
.materiel-card-comp {
  .preview {
    height: 240px;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
    &:hover {
      img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: unset;
      }
    }
  }
  .footer {
    display: flex;
    flex-direction: column;
    .meta {
      margin-top: auto;
      color: #999;
      font-size: 13px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
