/*
 * @Author: yuguangzhou
 * @Date: 2022-01-19 11:29:41
 * @LastEditTime: 2022-02-03 13:27:48
 * @LastEditors: Please set LastEditors
 * @Description: vite基础配置
 */
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import MarkDown from 'vite-plugin-md'
// https://vitejs.dev/config/

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": path.join(__dirname, "../src"),
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
        },
    }
    )]
})
