import { 
  registerMicroApps,
  start,
  addGlobalUncaughtErrorHandler,
  initGlobalState,
} from 'qiankun' // 底层是基于 single-spa

const loader = (loading) => {
  console.log('loading:', loading)
}

// 注册子应用
registerMicroApps([
  {
    name: 'vueApp',
    entry: 'http://localhost:1001/',
    container: '#container',
    activeRule: '/vue',
    loader,
    props: {
      app: 'vue'
    },
  },
  {
    name: 'reactApp',
    entry: 'http://localhost:1002/',
    container: '#container',
    activeRule: '/react',
    loader,
    props: {
      app: 'react'
    },
  }
], {
  beforeLoad: [
    app => {
      console.log(`${app.name}的beforeLoad阶段`)
    }
  ],
  beforeMount: [
    app => {
      console.log(`${app.name}的beforeMount阶段`)
    }
  ],
  afterMount: [
    app => {
      console.log(`${app.name}的afterMount阶段`)
    }
  ],
  beforeUnmount: [
    app => {
      console.log(`${app.name}的beforeUnmount阶段`)
    }
  ],
  afterUnmount: [
    app => {
      console.log(`${app.name}的afterUnmount阶段`)
    }
  ]
})

addGlobalUncaughtErrorHandler(event => {
  console.error(event)
  const { message } = event
  if (message && message.includes("died in status LOADING_SOURCE_CODE")) {    
    console.error("微应用加载失败，请检查应用是否可运行");  
  }
})

// 主子应用通信
const state = {}
const actions = initGlobalState(state)
// 新增数据项
actions.setGlobalState({ globalToken: '123456' })

start({
  // prefetch
  // true 会在第一个微应用mount 完成后，开始预加载其他微应用的静态资源
  // all 主应用 start 后即开始预加载所有微应用静态资源
  // string [] 会在第一个微应用 mounted 后开始加载数组内的微应用资源
  // funtion 可以完全自定义应用的资源加载时机（首屏应用和次屏应用）
  prefetch: 'all',
  sandbox: {
    // strictStyleIsolation: true, // 开启基于 ShadowDOM 的严格样式隔离
    // experimentalStyleIsolation: true, // 试验性的样式隔离：添加样式前缀，这个对全局样式绑定，如弹出框等会有问题
  },
  // singular: true, // 是否单实例场景，表示同一时间只会渲染一个微应用
  // fetch: () => {}
})
