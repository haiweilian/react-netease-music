/// <reference types="vitest" />
import path from 'path'
import React from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    React(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[name]',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/styles/additional.scss";\n',
      },
    },
  },
  test: {
    environment: 'happy-dom',
  },
})
