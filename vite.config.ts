
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 12345
  },
  resolve: {
    // 设置目录别名
    alias: {
      'src': path.resolve(__dirname, 'src'),
      'components': path.resolve(__dirname, "src/components"),
      'views': path.resolve(__dirname, "src/views"),
    },
  },
  plugins: [vue()],
})
