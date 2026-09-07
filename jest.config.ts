import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Caminho para a aplicação Next.js
  dir: './',
})

const config: Config = {
  // Ambiente de teste
  testEnvironment: 'jest-environment-jsdom',
  
  // Setup files
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  
  // Módulos a serem transformados
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  
  // Extensões de arquivo a serem testadas
  testMatch: [
    '**/test/**/*.[jt]s?(x)',
    '**/__tests__/**/*.[jt]s?(x)',
    '!**/src/**/*.test.[jt]s?(x)',
    '!**/src/**/*.spec.[jt]s?(x)',
  ],
  
  // Cobertura
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/__tests__/**',
    '!src/**/*.test.{js,jsx,ts,tsx}',
    '!src/**/*.spec.{js,jsx,ts,tsx}',
  ],
  
  // Thresholds de cobertura
  coverageThreshold: {
    // Definimos como 0 para satisfazer o TypeScript sem forçar a cobertura global
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
    // Thresholds por arquivo para componentes críticos
    './src/lib/utils.ts': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
    './src/components/ui/button.tsx': {
      branches: 90,
      functions: 100,
      lines: 90,
      statements: 90,
    },
    './src/components/CookieBanner.tsx': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
    './src/components/HeroSection.tsx': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
    './src/components/FaqSection.tsx': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}

export default createJestConfig(config)
