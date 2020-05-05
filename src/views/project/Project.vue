<template>
  <div class="project-view">
    <div class="filter-section">
      <el-input
        v-model="keyword"
        placeholder="输入关键词搜索"
        style="width: 360px;"
        @change="onSearch"
        >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="onSearch"
        ></el-button>
      </el-input>
      <el-button
        type="primary"
        style="margin-left: 8px;"
        @click="onCreate"
      >
        新建项目
      </el-button>
    </div>
    <div class="result-section">
      <div class="result-wrapper"
        v-infinite-scroll="loadMore"
        :infinite-scroll-disabled="disabled"
        >
        <el-card
          v-for="item in projects"
          :key="item.id"
          class="result-item"
          shadow="hover"
          @click.native="onView(item)"
          >
          <ProjectCard :model="item"></ProjectCard>
        </el-card>
      </div>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
    <el-dialog title="新建项目" :visible.sync="createModalVisible">
      <CreateProject :model="newModel"></CreateProject>
      <div slot="footer">
        <el-button @click="createModalVisible = false">取 消</el-button>
        <el-button type="primary" @click="doCreate">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'
import CreateProject from '@/components/CreateProject'
export default {
  components: {
    ProjectCard,
    CreateProject,
  },
  data() {
    return {
      projects: [],
      total: Infinity,
      pageSize: 10,
      pageNumber: 1,
      keyword: '',
      loading: false,
      newModel: {
        name: '',
      },
      createModalVisible: false,
    }
  },
  computed: {
    noMore() {
      return this.projects.length >= this.total
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.reload()
    next()
  },
  methods: {
    onCreate() {
      this.newModel.name = ''
      this.createModalVisible = true
    },
    async doCreate() {
      await this.$service.createProject({name: this.newModel.name})
      this.createModalVisible = false
      this.reload()
    },
    onSearch() {
      this.reload()
    },
    reload() {
      this.pageNumber = 1
      this.projects = []
      this.total = Infinity
      this.loadMore()
    },
    async loadMore() {
      const queryParams = {
        pageSize: this.pageSize,
        pageNumber: this.pageNumber,
        keyword: this.keyword,
      }
      this.loading = true
      const {total, list} = (await this.$service.queryProject(queryParams)).data.data
      this.loading = false
      this.total = total
      this.projects.push(...list)
    },
    onView(project) {
      this.$router.push({name: 'ProjectDetail', params: {
        projectId: project.id,
      }})
    }
  },
}
</script>

<style lang="less" scoped>
.project-view {
  height: 100%;
  .filter-section {
    margin-bottom: 16px;
  }
  .result-section {
    flex: 1;
    overflow: hidden;
    .result-wrapper {
      overflow: auto;
      display: flex;
      flex-wrap: wrap;
      .result-item {
        width: 200px;
        cursor: pointer;
        margin-right: 16px;
      }
    }
    p {
      color: #ccc;
      text-align: center;
    }
  }
}
</style>