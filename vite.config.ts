import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import fs from 'fs'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest:{
        "background_color": "white",
        "description": "Shows AKB48 Members",
        "display": "fullscreen",
        "icons": [
          {
            "src": "src/assets/icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
          }
        ],
        "name": "akb48-react-ts-app",
        "short_name": "akb48",
        "start_url": "/"
      },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      }
    })
  ],
  server: {
    host: '0.0.0.0',
    // https: {
    //   key: fs.readFileSync(`${__dirname}/src/assets/localhost-key.pem`),
    //   cert: fs.readFileSync(`${__dirname}/src/assets/localhost.pem`),
    // },
  },
})
