import { frameInRoutes } from '@/router/routes'
const MAX_MENU_LEVEL = 3 // 菜单嵌套最大层级
let menu = []

function generateMenu (menus, pathPrefix = '', level = 1) {
  let res
  if (level <= MAX_MENU_LEVEL) {
    res = {}
    if (menus.meta.icon) {
      res.icon = menus.meta.icon
    }
    res.name = menus.name
    res.title = menus.meta.title || '默认标题'
    res.path = pathPrefix + '/' + menus.path
    if (menus.children && menus.children.length) {
      res.children = menus.children.filter(item => !item.hidden)
      .map(item => {
        return generateMenu(item, res.path, level + 1)
      })
    }
    return res
  } else {
    return false
  }
}

export function getMenu () {
  menu = []
  for (let item of frameInRoutes.children) {
    if (!item.hidden) {
      menu.push(generateMenu(item))
    }
  }

  return menu
}
