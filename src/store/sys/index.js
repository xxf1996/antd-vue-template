export default {
  namespaced: true,
  state: {
    selectedMenu: {} // 当前选中的菜单信息
  },
  mutations: {
    setSelectedMenu (state, info) {
      state.selectedMenu = info
    }
  }
}
