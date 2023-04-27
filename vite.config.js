import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // server: {
  //   hot: true,
  //   noInfo: false,
  //   overlay: {
  //     warnings: true,
  //     errors: true,
  //   },
  //   // 服务配置
  //   port: 10000, // 类型： number 指定服务器端口;
  //   open: true, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
  //   cors: true, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
  //   proxy: {
  //     // 类型： Record<string, string | ProxyOp 为开发服务器配置自定义代理规则
  //     '/chuxinoa': {
  //       target: 'https://console.chuxindata.com/',
  //       changeOrigin: true,//是否跨域
  //       secure: false,
  //       // eslint-disable-next-line no-shadow
  //       rewrite: (path) => path.replace('/api', '')
  //     }
  //   }
  // },
})
