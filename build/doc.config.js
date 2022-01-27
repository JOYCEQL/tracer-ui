/*
 * @Author: yuguangzhou
 * @Date: 2022-01-21 16:41:38
 * @LastEditTime: 2022-01-25 15:10:03
 * @LastEditors: yuguangzhou
 * @Description: 文档配置文件
 */
import baseConfig from './base.config';
import { defineConfig } from 'vite';
export default defineConfig({
  ...baseConfig,
  build: {
    outDir: 'docs',
  },
});

