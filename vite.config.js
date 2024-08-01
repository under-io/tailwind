import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: true /** Clears the output directory before building. **/,
    lib: {
      entry: ['src/index.js'] /** Specifies the entry file for the library. */,
      formats: ['es', 'cjs'] /** Specifies the output formats (CommonJS and ES modules). */,
    },
  },
})
