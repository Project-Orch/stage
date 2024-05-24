import { defineRecipe } from '@pandacss/dev'

export const button = defineRecipe({
  className: 'button',
  base: {
    alignItems: 'center',
    appearance: 'none',
    borderRadius: 'sm',
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: 'medium',
    minWidth: '0',
    justifyContent: 'center',
    outline: 'none',
    transitionDuration: 'normal',
    transitionProperty: 'background, border-color, color, box-shadow',
    transitionTimingFunction: 'default',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',

    transition: '0.5s',

    '&[data-loading=true]': {
      opacity: '0.6',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
  variants: {
    variant: {
      solid: {
        background: 'foreground.100',
        color: 'neutral.700',
        _hover: {
          background: 'foreground.200',
        },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'foreground.300',
          outlineOffset: '2px',
        },
        _disabled: {
          opacity: '0.4',
          cursor: 'not-allowed',
          _hover: {
            background: 'foreground.100',
          },
        },
      },
      outline: {
        borderWidth: '1px',
        borderColor: 'foreground.600',
        color: 'foreground.100',
        _hover: {
          background: 'foreground.800',
        },
        _disabled: {
          opacity: '0.6',
          cursor: 'not-allowed',
          _hover: {
            background: 'transparent',
          },
        },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'foreground.600',
          outlineOffset: '2px',
        },
      },
      ghost: {
        color: 'foreground.100',
        _hover: {
          background: 'foreground.800',
        },
        _selected: {
          background: 'foreground.700',
        },
        _disabled: {
          cursor: 'not-allowed',
          opacity: '0.6',
          _hover: {
            background: 'transparent',
          },
        },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'foreground.800',
          outlineOffset: '2px',
        },
      },
      link: {
        color: 'foreground.100',
        background: 'transparent',
        _hover: {
          textDecoration: 'underline',
        },
        _disabled: {
          cursor: 'not-allowed',
          opacity: '0.6',
        },
        height: 'auto!',
        px: '0!',
        minW: '0!',
      },
      subtle: {
        background: 'foreground.800',
        color: 'foreground.100',
        _hover: {
          background: 'foreground.700',
        },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'foreground.800',
          outlineOffset: '2px',
        },
        _disabled: {
          cursor: 'not-allowed',
          opacity: '0.6',
          _hover: {
            background: 'foreground.800',
          },
        },
      },
    },
    size: {
      xs: {
        h: '8',
        minW: '8',
        textStyle: 'xs',
        px: '3',
        gap: '2',
        '& svg': {
          fontSize: 'md',
          width: '4',
          height: '4',
        },
      },
      sm: {
        h: '9',
        minW: '9',
        textStyle: 'sm',
        px: '3.5',
        gap: '2',
        '& svg': {
          width: '4',
          height: '4',
        },
      },
      md: {
        h: '10',
        minW: '10',
        textStyle: 'sm',
        px: '4',
        gap: '2',
        '& svg': {
          width: '5',
          height: '5',
        },
      },
      lg: {
        h: '11',
        minW: '11',
        textStyle: 'md',
        px: '4.5',
        gap: '2',
        '& svg': {
          width: '5',
          height: '5',
        },
      },
      xl: {
        h: '12',
        minW: '12',
        textStyle: 'md',
        px: '5',
        gap: '2.5',
        '& svg': {
          width: '5',
          height: '5',
        },
      },
      '2xl': {
        h: '16',
        minW: '16',
        textStyle: 'lg',
        px: '7',
        gap: '3',
        '& svg': {
          width: '6',
          height: '6',
        },
      },
    },
  },
})
