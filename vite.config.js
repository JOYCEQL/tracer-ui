/*
 * @Author: yuguangzhou
 * @Date: 2022-01-19 11:29:41
 * @LastEditTime: 2022-01-21 14:51:26
 * @LastEditors: yuguangzhou
 * @Description: vite配置文件
 */
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import MarkDown from 'vite-plugin-md'
// 通常的默认值们
// https://vitejs.dev/config/

export default defineConfig({
  resolve: {
    alias: {
      "@": path.join(__dirname, "/src"),
    },
  },
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    MarkDown(
      {
        markdownItOptions: {
          html: true,
          linkify: true,
          typographer: true,
          // highlight: function (str, lang) {
          //   if (lang && hljs.getLanguage(lang)) {
          //     try {
          //       return '<pre class="hljs"><code>' +
          //              hljs.highlight(lang, str, true).value +
          //              '</code></pre>';
          //     } catch (__) {}
          //   }
          // }
        
        },
    }
    )]
})
