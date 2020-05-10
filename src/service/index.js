import Api from './api'
import Axios from './request'

export async function testAuth() {
  try {
    const user = (await Axios.get(Api.testAuth)).data.data
    return user
  } catch (err) {
    return null
  }
}

export async function login({ username, password }) {
  return await Axios.post(Api.login, {
    username,
    password,
  })
}

export async function register({ username, password }) {
  return await Axios.post(Api.register, {
    username,
    password,
  })
}

export async function logout() {
  return await Axios.post(Api.logout)
}

export async function queryMateriel({ platform, pageSize, pageNumber, keyword }) {
  return await Axios.get(Api.queryMateriel, {
    params: {
      platform,
      pageSize,
      pageNumber,
      keyword,
    },
  })
}

export async function queryMaterielVersion(id) {
  return await Axios.get(Api.queryMaterielVersion, {
    params: {
      id,
    }
  })
}

export async function queryProject({ pageSize, pageNumber, keyword }) {
  return await Axios.get(Api.queryProject, {
    params: {
      pageSize,
      pageNumber,
      keyword,
    }
  })
}

export async function createProject({ name }) {
  return await Axios.post(Api.createProject, {
    name,
  })
}

export async function getProjectMateriels(projectId) {
  return await Axios.get(Api.getProjectMateriels, {
    params: {
      projectId,
    }
  })
}

export async function changeProjectMaterielVersion({ id, materielVerId }) {
  return await Axios.post(Api.changeProjectMaterielVersion, {
    id,
    materielVerId,
  })
}

export async function changeProjectMaterielVersionName({ id, name }) {
  return await Axios.post(Api.changeProjectMaterielVersionName, {
    id,
    name,
  })
}

export async function getProjectDetail(projectId) {
  return await Axios.get(Api.getProjectDetail, {
    params: {
      projectId,
    }
  })
}

export async function queryUsers(keyword) {
  return await Axios.get(Api.queryUser, {
    params: {
      keyword
    }
  })
}

export async function addMemberToProject({ projectId, userId }) {
  return await Axios.post(Api.addMemberToProject, {
    userId,
    projectId,
  })
}

export async function removeMemberFromProject({ userId, projectId }) {
  return await Axios.delete(Api.removeMemberFromProject, {
    params: {
      userId,
      projectId,
    },
  })
}

export async function getProjectMembers(projectId) {
  return await Axios.get(Api.getProjectMembers, {
    params: {
      projectId
    }
  })
}

export async function addMaterielVerToProject({ name, projectId, materielVerId }) {
  return await Axios.post(Api.addMaterielToProject, {
    name,
    projectId,
    materielVerId,
  })
}

export async function removeMaterielVerFromProject(id) {
  return await Axios.delete(Api.removeMaterielFromProject, {
    params: {
      id,
    }
  })
}

export async function changeProjectName({ projectId, name }) {
  return await Axios.post(Api.changeProjectName, {
    projectId,
    name,
  })
}

export async function getAccessToken() {
  return await Axios.post(Api.getAccessToken)
}

export async function getProjectUrl(projectId) {
  return await Axios.get(Api.getProjectUrl, {
    params: {
      projectId,
    }
  })
}

export async function exportMateriel(materielVerId) {
  const res = await Axios.get(Api.exportMateriel, {
    params: {
      materielVerId
    },
    responseType: 'blob',
  })
  let a = document.createElement('a')
  const filename = res.headers['content-disposition'].match(/filename=(.*?)$/)[1]
  a.href = URL.createObjectURL(res.data)
  a.download = filename
  a.click()
  URL.revokeObjectURL(a.href)
  a = null
}

export async function exportProject(projectId) {
  const res = await Axios.get(Api.exportProject, {
    params: {
      projectId
    },
    responseType: 'blob',
  })
  let a = document.createElement('a')
  const filename = res.headers['content-disposition'].match(/filename=(.*?)$/)[1]
  a.href = URL.createObjectURL(res.data)
  a.download = filename
  a.click()
  URL.revokeObjectURL(a.href)
  a = null
}