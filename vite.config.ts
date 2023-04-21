import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import prismjsPlugin from 'vite-plugin-prismjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  	react()
  ],
  base: "/jakkunight/#"
})
