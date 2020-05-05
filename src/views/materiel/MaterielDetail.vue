<template>
  <div class="materiel-detail-view" v-if="materielVer">
    <el-page-header class="header" @back="goBack" :content="materielVer.name">
      <div
        slot="content"
      >
        <el-select
          size="mini"
          :value="materielVer.id"
          @change="onChangeVersion"
          >
          <el-option
            v-for="item in versions"
            :key="item.id"
            :label="item.version"
            :value="item.id"
            >
          </el-option>
        </el-select>
        <el-divider direction="vertical"></el-divider>
        <el-button
          type="text"
          size="mini"
          style="margin-left: 8px;"
          icon="el-icon-sell"
          @click="onAddToProject"
          >添加至项目
        </el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button
          type="text"
          size="mini"
          style="margin-left: 8px;"
          icon="el-icon-full-screen"
          @click="onViewDocInNewWindow"
          >
        </el-button>
      </div>
    </el-page-header>
    <div class="content">
      <el-divider></el-divider>
      <iframe
        :src="materielVer.doc"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
    <el-dialog
      :visible.sync="addMaterielVerToProjectVisible"
      title="添加至项目"
      >
      <el-form :model="addMaterielVerToProjectModel">
        <el-form-item label="项目" prop="projectId" label-width="100px">
          <el-select
            v-model="addMaterielVerToProjectModel.projectId"
            >
            <el-option
              v-for="item in projects"
              :key="item.id"
              :label="item.name"
              :value="item.id"
              >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="别名" prop="name" label-width="100px">
          <el-input v-model="addMaterielVerToProjectModel.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="addMaterielVerToProjectVisible = false">取 消</el-button>
        <el-button type="primary" @click="doAddToProject">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      materielVer: null,
      versions: [],
      projects: [],
      addMaterielVerToProjectModel: {
        name: '',
        projectId: '',
      },
      addMaterielVerToProjectVisible: false,
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.initMateriel(to.params.versionId)
    next()
  },
  created() {
    this.initMateriel()
    this.getProjects()
  },
  methods: {
    async getProjects() {
      this.projects = (await this.$service.queryProject({
        pageSize: 999,
        pageNumber: 1,
      })).data.data.list
    },
    async initMateriel(versionId) {
      versionId = versionId || this.$route.params.versionId
      const {detail, versions} = (await this.$service.queryMaterielVersion(versionId)).data.data
      this.materielVer = detail
      this.versions = versions
    },
    async onChangeVersion(versionId) {
      this.$route.params.versionId = versionId
      this.$router.replace({
        name: 'MaterielDetail',
        params: {
          platform: this.$route.params.platform,
          versionId: versionId,
        },
      })
    },
    async onAddToProject() {
      this.addMaterielVerToProjectModel = {
        name: '',
        projectId: '',
      }
      this.addMaterielVerToProjectVisible = true
    },
    onViewDocInNewWindow() {
      window.open(this.materielVer.doc)
    },
    async doAddToProject() {
      await this.$service.addMaterielVerToProject({
        name: this.addMaterielVerToProjectModel.name,
        projectId: this.addMaterielVerToProjectModel.projectId,
        materielVerId: this.materielVer.id,
      })
      this.addMaterielVerToProjectVisible = false
      this.$notify.success('已添加至项目')
    },
    goBack() {
      this.$router.replace({
        name: 'Materiel',
        params: {
          platform: this.$route.params.platform
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.materiel-detail-view {
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    overflow: hidden;
  }
}
</style>