import { collapsibleAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const collapsible = defineSlotRecipe({
  className: 'collapsible',
  slots: collapsibleAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      h: '100%',
      w: '100%',
      flexDir: 'column',
    },
    content: {
      overflow: 'hidden',
      width: '100%',
      _open: {
        animation: 'collapse-in',
      },
      _closed: {
        animation: 'collapse-out',
      },
    },
  },
})
