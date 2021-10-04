# Vue 3 添加 Markdown

- 让 Vue 3 将 Markdown 文件作为单文件引入。
- 让 Markdown 文件支持 Vue 单文件语法。

## 安装

```sh
yarn add vite-plugin-md -D
# or npm i vite-plugin-md -D
```

在 `vite.config.js` 中添加如下配置

```js
// vite.config.js
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'

export default {
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown()
  ],
}
```

如果附带 TypeScript，还需要添加 .md 后缀的类型声明，在 `src/env.d.ts` 中

```ts
declare module '*.md' {
  import { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}
```

## 将 Markdown 导入为 Vue 组件

```html
<template>
  <HelloWorld />
</template>

<script>
import HelloWorld from './README.md'

export default {
  components: {
    HelloWorld,
  },
}
</script>
```

## 在 Markdown 中使用 Vue 单文件写法

```js
import { createApp } from 'vue'
import App from './App.vue'
import Counter from './Counter.vue'

const app = createApp(App)

// 全局注册
app.component('Counter', Counter) // <--

app.mount()
```

```html
<!-- setup 标签中引入  -->
<script setup>
import { Counter } from './Counter.vue
</script>

<Counter :init='5'/>
```

## 导入代码段

以导入 `.vue` 文件为例

安装

```bash
yarn add prismjs
yarn add -D markdown-it-custom-block
```

在 `vite.config.js` 中添加

```ts
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import fs from 'fs'
import Prism from 'prismjs';
const customBlock = require('markdown-it-custom-block')

export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      markdownItSetup(md) {
        md.use(customBlock, {
          code(url) {
            const file = fs.readFileSync(url).toString()
            const code = Prism.highlight(file.trim(), Prism.languages.html, 'html')
            return `<pre class="language-vue"><code class="language-vue">${code}</code></pre>`.trim()
          }
        })
      }
    })
  ]
})
```

在 Markdown 中使用

```md
@[code](./src/components/Button.vue)
```

## 相关依赖

- [vite-plugin-md](https://github.com/antfu/vite-plugin-md)
- [prismjs](https://github.com/PrismJS/prism/)
- [markdown-it-custom-block](https://github.com/posva/markdown-it-custom-block)