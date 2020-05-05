<template>
  <div class="materiel-view">
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
    </div>
    <div class="result-section">
      <div class="result-wrapper"
        v-infinite-scroll="loadMore"
        :infinite-scroll-disabled="disabled"
        >
        <el-card
          v-for="item in materiels"
          :key="item.id"
          class="result-item"
          shadow="hover"
          @click.native="onView(item)"
          >
          <MaterielCard :model="item"></MaterielCard>
        </el-card>
      </div>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>

<script>
import MaterielCard from '@/components/MaterielCard'
export default {
  data() {
    return {
      materiels: [],
      total: Infinity,
      pageSize: 10,
      pageNumber: 1,
      keyword: '',
      loading: false,
      platform: this.$route.params.platform,
    }
  },
  components: {
    MaterielCard,
  },
  computed: {
    noMore() {
      return this.materiels.length >= this.total
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.reload(to.params.platform)
    next()
  },
  methods: {
    onSearch() {
      this.reload()
    },
    reload(platform) {
      this.pageNumber = 1
      this.materiels = []
      this.total = Infinity
      this.platform = platform || this.$route.params.platform
      this.loadMore()
    },
    async loadMore() {
      const queryParams = {
        platform: this.platform,
        pageSize: this.pageSize,
        pageNumber: this.pageNumber,
        keyword: this.keyword,
      }
      this.loading = true
      const {total, list} = (await this.$service.queryMateriel(queryParams)).data.data
      this.loading = false
      this.total = total
      this.materiels.push(...list)
    },
    onView(materiel) {
      this.$router.push({
        name: 'MaterielDetail',
        params: {
          platform: this.platform,
          versionId: materiel.latest.id,
        }
      })
    }
  },
}
</script>

<style lang="less" scoped>
.materiel-view {
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
        width: 400px;
        cursor: pointer;
        margin-right: 16px;
        margin-bottom: 16px;
      }
    }
    p {
      color: #ccc;
      text-align: center;
    }
  }
}
</style>