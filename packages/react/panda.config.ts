import { defineConfig, defineKeyframes } from '@pandacss/dev'
import { stagePreset } from '@stage-lib/styled-system'
import { collapsible } from './src/recipes/collapsible'
import { button } from './src/recipes/button'
import { keyframes } from './src/recipes/keyframes'
import { conditions } from './src/recipes/conditions'
import { spacing, sizes } from './src/recipes/spacing'
import { iconButton } from './src/recipes/icon-button'
import { avatar } from './src/recipes/avatar'

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: [stagePreset],

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/stories/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes,
      recipes: {
        button,
        iconButton,
        avatar,
      },
      slotRecipes: {
        collapsible: collapsible,
      },
      tokens: {
        spacing,
        sizes,
      },
    },
  },
  conditions,
  jsxFramework: 'react',
  outExtension: 'js',

  // The output directory for your css system
  outdir: 'styled-system',
})
