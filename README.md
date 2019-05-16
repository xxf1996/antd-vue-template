# antd-vue-template

一套基于`antd-vue`的后台管理模板。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 模板说明

参考了`d2admin`的项目结构；

### 项目组成

1. 路由 + 菜单
2. Mock数据
3. vuex + 数据持久化（cookie）
4. 工具库
5. 布局组件（侧边菜单 + 顶部 + 容器区域）
6. 通用组件
7. 路由组件（页面）

### 菜单生成

菜单是根据路由文件（`@/router/index.js`）自动生成，通过在路由的`meta`属性中添加一些额外属性来自动根据路由层级生成相应层级的菜单；

- `meta.auth`：`bool`，用来表明当前路由是否要验证用户已登录；
- `meta.title`：`string`，路由对应的菜单名称，同时也是路由页面的标题；
- `meta.icon`：`string`，菜单项的图标，对应`antd-vue`的`icon`组件的`type`值；
- `hidden`：`bool`，为`true`时不会显示在菜单中；

### 公共样式变量

公共的样式变量放在`@/assets/style/public.scss`文件中；

### Mock数据

模拟接口放在`@/mock`文件夹中，可以在`vue.config.js`文件中决定是否开启`mock`；