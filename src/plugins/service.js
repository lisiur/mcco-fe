import Vue from 'vue'
import $api from '@/service/api'
import $axios from '@/service/request'
import * as $service from '@/service'

Vue.prototype.$axios = $axios
Vue.prototype.$api = $api
Vue.prototype.$service = $service
