import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Replace this with your repo name
const repoName = 'todo-list'

export default defineConfig({
  plugins: [react()],
  base: `/${todo-list}/`, // 👈 important
})
