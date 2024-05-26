import { collapsibleAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const collapsible = defineSlotRecipe({
  className: 'collapsible',
  slots: collapsibleAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      h: 'full',
      w: 'full',
      flexDir: 'column',
      alignItems: 'flex-start',

      position: 'relative',
    },
    content: {
      overflow: 'hidden',
      width: 'full',
      h: 'full',
      _open: {
        animation: 'open 250ms',
      },
      _closed: {
        animation: 'close 200ms',
      },
    },
  },
})
