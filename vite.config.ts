import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import fs from 'fs'
import Prism from 'prismjs';
const customBlock = require('markdown-it-custom-block')

// https://vitejs.dev/config/
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
