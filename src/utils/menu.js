import { frameInRoutes } from '@/router/routes'
const MAX_MENU_LEVEL = 3 // 菜单嵌套最大层级
let menu = []

function generateMenu (menus, parent = null, level = 1) {
  let res
  if (level <= MAX_MENU_LEVEL) {
    res = {}
    if (menus.meta.icon) {
      res.icon = menus.meta.icon
    }
    res.name = menus.name
    res.title = menus.meta.title || '默认标题'
    if (parent) {
      res.path = parent.path + '/' + menus.path
      res.parent = parent.name
    } else {
      res.path = '/' + menus.path
    }
    if (menus.children && menus.children.length) {
      res.children = menus.children.filter(item => !item.hidden)
      .map(item => {
        return generateMenu(item, res, level + 1)
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

export function flatMenu (menus) {
  let list = new Map()
  const flatItem = item => {
    if (item.children && item.children.length) {
      for (let one of item.children) {
        flatItem(one)
      }
    }
    list.set(item.name, item)
  }

  for (let menu of menus) {
    flatItem(menu)
  }
  
  return list
}
