import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import 'ant-design-vue/dist/reset.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css' // 样式

const app = createApp(App)

app.use(router)

app.mount('#app')

// 创建v-highlight全局指令
app.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
