const context = process.env.NODE_ENV === 'production'
    ? '/mcco/api'
    : ''

export default {
  register: `${context}/auth/register`,
  login: `${context}/auth/login`,
  logout: `${context}/auth/logout`,
  getAccessToken: `${context}/auth/getAccessToken`,
  testAuth: `${context}/auth/test`,

  queryUser: `${context}/user/query`,

  queryProject: `${context}/project/query`,
  getProjectDetail: `${context}/project/getDetail`,
  createProject: `${context}/project/create`,
  changeProjectName: `${context}/project/changeName`,
  getProjectMateriels: `${context}/project/getMateriels`,
  getProjectUrl: `${context}/project/getUrl`,
  changeProjectMaterielVersion: `${context}/project/changeMaterielVersion`,
  changeProjectMaterielVersionName: `${context}/project/changeMaterielVersionName`,
  getProjectMembers: `${context}/project/getMembers`,
  addMemberToProject: `${context}/project/addMember`,
  removeMemberFromProject: `${context}/project/removeMember`,
  addMaterielToProject: `${context}/project/addMateriel`,
  removeMaterielFromProject: `${context}/project/removeMateriel`,
  exportProject: `${context}/project/export`,

  queryMateriel: `${context}/materiel/query`,
  exportMateriel: `${context}/materiel/export`,
  queryMaterielVersion: `${context}/materiel/queryVersion`
}