<template>
  <div class="project-detail-view">
    <el-page-header
      style="margin-bottom: 16px;"
      @back="goBack"
      >
      <div slot="title">
        <span style="position: relative; top: 1px;">项目列表</span>
      </div>
      <div slot="content">
        <el-tooltip
          content="点击修改名称"
          placement="bottom"
          effect="light"
          :enterable="false"
          :hide-after="560"
          >
          <el-button type="text" size="mini" @click="onChangeProjectName">{{project.name}}</el-button>
        </el-tooltip>
        <el-divider direction="vertical"></el-divider>
        <el-button
          type="text"
          size="mini"
          icon="el-icon-copy-document"
          @click="onCopyProjectSourcePath"
          >
        复制项目地址</el-button>
      </div>
    </el-page-header>
    <el-tabs type="border-card" value="materiels">
      <el-tab-pane label="物料" name="materiels">
        <el-table
          :data="items"
          border
          style="width: 100%"
          >
          <el-table-column
            label="别名"
          >
            <template slot-scope="scope">
              <el-tooltip
                content="点击修改别名"
                placement="right"
                effect="light"
                :enterable="false"
                >
                <el-button
                  type="text"
                  plain
                  size="mini"
                  style="margin-left: 8px;"
                  @click="onChangeName(scope.row)"
                >{{scope.row.name}}</el-button>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column
            label="物料名称"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.materiel.name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="物料版本"
          >
            <template slot-scope="scope">
              <el-select
                :value="scope.row.materielVer.version"
                size="mini"
                @focus="onGetVersions(scope.row)"
                @change="v => doChangeVersion(scope.row, v)"
              >
                <el-option
                  v-for="item in versions[scope.row.materiel.id].versions"
                  :key="item.id"
                  :label="item.version"
                  :value="item.id">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="120"
          >
            <template slot-scope="scope">
              <el-button
                type="text"
                size="mini"
                plain
                style="margin-right: 8px;"
                @click="onViewDoc(scope.row)"
              >查看文档</el-button>
              <el-popconfirm
                confirmButtonText='好的'
                cancelButtonText='不用了'
                icon="el-icon-info"
                iconColor="red"
                title="确定删除吗？"
                @onConfirm="doDeleteMateriel(scope.row)"
              >
                <el-button
                  slot="reference"
                  type="text"
                  size="mini"
                  style="color: #f56c6c;"
                  plain
                >移除</el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="成员" name="members">
        <el-select
          v-model="newMemberId"
          filterable
          remote
          size="small"
          reserve-keyword
          placeholder="输入用户名搜索"
          no-data-text="未搜索到相关用户"
          :remote-method="queryUsers"
          :loading="queryUsersLoading"
          style="margin: 0 8px 16px 0;"
          >
          <el-option
            v-for="item in queriedUsers"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
        <el-button
          size="small"
          type="primary"
          :disabled="!newMemberId"
          @click="addMember"
          >添加成员</el-button>
        <el-table
          :data="members"
          border
          style="width: 100%"
        >
          <el-table-column
            label="用户名"
          >
            <template slot-scope="scope">
              <span>{{scope.row.name}}</span>
              <el-tag
                v-if="project.creator.id === scope.row.id"
                size="mini"
                style="margin-left: 4px;"
              >owner</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="120"
          >
            <template slot-scope="scope">
              <el-popconfirm
                confirmButtonText='好的'
                cancelButtonText='不用了'
                icon="el-icon-info"
                iconColor="red"
                title="确定移除吗？"
                @onConfirm="doDeleteMember(scope.row)"
              >
                <el-button
                  slot="reference"
                  type="text"
                  size="mini"
                  style="color: #f56c6c;"
                  plain
                >移除成员</el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import copyTextToClipboard from '@/utils/copyTextToClipboard'
export default {
  data() {
    return {
      project: {
        name: '项目',
      },
      items: [],
      versions: {},
      members: [],
      newMemberId: '',
      queriedUsers: [],
      queryUsersLoading: false,
    }
  },
  beforeRouteEnter(to, from, next) {
    next(async vm => {
      vm.project = (await vm.$service.getProjectDetail(vm.$route.params.projectId)).data.data
      vm.reloadMateriels()
      vm.reloadMembers()
    })
  },
  methods: {
    async reloadMateriels() {
      const projectId = this.$route.params.projectId
      const items = (await this.$service.getProjectMateriels(projectId)).data.data
      let versions = {}
      items.forEach(item => {
        const materiel = item.materiel
        const materielVer = item.materielVer
        if (!versions[materiel.id]) {
          versions[materiel.id] = {
            loaded: false,
            versions: []
          }
        }
        versions[materiel.id].versions.push({
          id: materielVer.id,
          version: materielVer.version,
        })
      })
      this.versions = versions
      this.items = items
    },
    onChangeName(item) {
      this.$prompt('请输入新别名', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(async ({ value }) => {
        await this.$service.changeProjectMaterielVersionName({id: item.id, name: value})
        item.name = value
        this.$notify.success('别名修改成功')
      })
    },
    async doChangeVersion(item, materielVerId) {
      const {materielVer, operator} = (await this.$service.changeProjectMaterielVersion({id: item.id, materielVerId})).data.data
      item.materielVer = materielVer
      item.operator = operator
      this.$notify.success('版本修改成功')
    },
    async onGetVersions(item) {
      const materiel = item.materiel
      const materielVer = item.materielVer
      if (this.versions[materiel.id].loaded) {
        return
      }
      const {versions} = (await this.$service.queryMaterielVersion(materielVer.id)).data.data
      this.$set(this.versions, materiel.id, {
        loaded: true,
        versions
      })
    },
    onViewDoc(item) {
      const materielVerId = item.materielVer.id
      const platform = item.materiel.platform
      let routeData = this.$router.resolve({name: 'MaterielDetail', params: {
        platform,
        versionId:  materielVerId,
      }});
      window.open(routeData.href, '_blank');
    },

    async reloadMembers() {
      this.members = (await this.$service.getProjectMembers(this.project.id)).data.data
    },
    async queryUsers(keyword) {
      if (keyword) {
        this.queryUsersLoading = true
        this.queriedUsers = (await this.$service.queryUsers(keyword)).data.data
        this.queryUsersLoading = false
      } else {
        this.queriedUsers = []
        this.queryUsersLoading = false
      }
    },
    async addMember() {
      if (!this.newMemberId) {
        this.$message.warning('请先搜索用户')
        return
      }
      await this.$service.addMemberToProject({
        userId: this.newMemberId,
        projectId: this.project.id,
      })
      this.newMemberId = ''
      this.reloadMembers()
      this.$notify.success('新成员已添加')
    },
    async doDeleteMateriel(item) {
      await this.$service.removeMaterielVerFromProject(item.id)
      this.reloadMateriels()
      this.$notify.success('该物料已移出项目')
    },
    async doDeleteMember(item) {
      await this.$service.removeMemberFromProject({
        userId: item.id,
        projectId: this.project.id,
      })
      this.reloadMembers()
      this.$notify.success('该成员已移出项目')
    },
    onChangeProjectName() {
      this.$prompt('请输入新名称', '修改项目名称', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(async ({ value }) => {
        await this.$service.changeProjectName({projectId: this.project.id, name: value})
        this.project.name = value
        this.$notify.success('项目名称已修改')
      })
    },
    onCopyProjectSourcePath() {
      const projectSourcePath = location.origin + '/mcco/api/source/project/' + this.project.id
      copyTextToClipboard(projectSourcePath)
      .then(() => {
        this.$notify.success('复制成功')
      })
      .catch(err => {
        this.$notify.error(err.message)
      })
    },
    goBack() {
      this.$router.replace({
        name: 'Project',
      })
    },
  },
}
</script>

<style>

</style>