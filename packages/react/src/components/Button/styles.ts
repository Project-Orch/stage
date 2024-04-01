import { styled } from '../../../styled-system/jsx'

export const Button = styled('button', {
  base: {
    cursor: 'pointer',

    display: 'flex',
    alignItems: 'center',

    borderRadius: 'sm',
    p: '0.5rem 1rem',
    gap: '0.5rem',
    fontWeight: 'medium',

    transition: '0.5s',

    '&[data-loading=true]': {
      opacity: '0.6',
    },
  },
  variants: {
    variant: {
      default: {
        color: 'neutral.700',
        backgroundColor: 'foreground.100',

        _hover: {
          backgroundColor: 'foreground.200',
        },

        _disabled: {
          cursor: 'not-allowed',
          opacity: '0.4',

          _hover: {
            backgroundColor: 'foreground.100',
          },
        },
      },
      secondary: {
        color: 'foreground.100',
        backgroundColor: 'foreground.800',

        _hover: {
          backgroundColor: 'foreground.700',
        },

        _disabled: {
          cursor: 'not-allowed',
          opacity: '0.6',

          _hover: {
            backgroundColor: 'foreground.800',
          },
        },
      },
      outline: {
        color: 'foreground.100',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'foreground.600',

        _hover: {
          backgroundColor: 'foreground.800',
        },

        _disabled: {
          cursor: 'not-allowed',
          opacity: '0.6',

          _hover: {
            backgroundColor: 'transparent',
          },
        },
      },
      destructive: {
        color: 'foreground.200',
        backgroundColor: 'red.800',

        _hover: {
          backgroundColor: 'red.700',
        },

        _disabled: {
          cursor: 'not-allowed',
          opacity: '0.6',

          _hover: {
            backgroundColor: 'red.800',
          },
        },
      },
      ghost: {
        color: 'foreground.100',
        backgroundColor: 'transparent',

        _hover: {
          backgroundColor: 'foreground.800',
        },

        _disabled: {
          cursor: 'not-allowed',
          opacity: '0.6',

          _hover: {
            backgroundColor: 'transparent',
          },
        },
      },
      link: {
        color: 'foreground.100',
        backgroundColor: 'transparent',
        p: '0',

        _hover: {
          textDecoration: 'underline',
        },

        _disabled: {
          cursor: 'not-allowed',
          opacity: '0.6',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
