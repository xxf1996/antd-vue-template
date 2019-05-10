import { frameInRoutes } from '@/router/routes'
const MAX_MENU_LEVEL = 3 // 菜单嵌套最大层级
let menu = []

function generateMenu (menus, level = 1) {
  let res
  if (level <= MAX_MENU_LEVEL) {
    if (menus.children && menus.children.length) {
      res = menus.children.map(item => {
        if (item.hidden) {
          return true
        }
        let info = {}
        if (item.icon) {
          info.icon = item.icon
        }
        info.title = item.title || '默认标题'
        info.path = item.path || '/index'
        info.children = generateMenu(item, level + 1)
        if (info.children === false) {
          delete info.children
        }
      })
    } else {
      res = {}
      if (menus.icon) {
        res.icon = menus.icon
      }
      res.title = menus.title || '默认标题'
      res.path = menus.path || '/index'
      return res
    }
  } else {
    return false
  }
}

function getMenu () {
  menu = []
  for (let item of frameInRoutes) {
    if (!item.hidden) {
      menu.push(generateMenu(item))
    }
  }
}

export default {
  getMenu
}
