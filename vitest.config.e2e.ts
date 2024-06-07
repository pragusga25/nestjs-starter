import swc from 'unplugin-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: [ '**/*.e2e-spec.ts'],
    globals: true,
    root: './',
    coverage: {
      ...configDefaults.coverage,
      provider: 'v8',
      exclude: [
        '**/node_modules/**',
        '**/test/**',
        '**/dist/**',
        '*.js',
        '**/*main.ts',
        '*.module.ts',
      ],
      thresholds: {
        branches: 100,
        lines: 95,
        statements: 95,
        functions: 100,
        perFile: true,
      },
    },
  },
  plugins: [
    tsconfigPaths(),
    // This is required to build the test files with SWC
    swc.vite({
      // Explicitly set the module type to avoid inheriting this value from a `.swcrc` config file
      module: { type: 'es6' },
    }),
  ],
})
