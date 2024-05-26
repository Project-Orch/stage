import { css } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const content = css({
  display: 'flex',
  h: 'full',
  w: 'full',
  flexDir: 'column',
  alignItems: 'flex-start',

  bgColor: 'neutral.600',
  borderRightWidth: '1px',
  borderColor: 'foreground.800',

  p: '12px 16px',
  gap: '16px',

  color: 'foreground.300',

  position: 'relative',
})

export const VisuallyHidden = styled('div', {
  base: {
    display: 'flex',
    w: '25px',
    h: '50px',

    position: 'absolute',
    top: 0,
    left: 0,
  },
})

export const Header = styled('section', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    fontFamily: 'default',
  },
})

export const Title = styled('h2', {
  base: {
    fontSize: '16px',
    fontWeight: 'medium',
    color: 'foreground.300',
  },
})

export const Subtitle = styled('span', {
  base: {
    fontSize: '11px',
    fontWeight: 'regular',
    color: 'foreground.600',
  },
})

export const Column = styled('div', {
  base: {
    fontFamily: 'default',
    display: 'flex',
    flexDir: 'column',
  },
})

export const Section = styled('section', {
  base: {
    display: 'flex',
    flexDir: 'column',
    w: 'full',
    gap: '4px',
  },
})

export const Item = styled('option', {
  base: {
    display: 'flex',
    alignItems: 'center',

    gap: '10px',
    p: '4px 10px',

    fontSize: '1rem',
    fontFamily: 'default',
    fontWeight: 'medium',
    color: 'foreground.300',

    borderRadius: '8px',

    transition: '0.3s',

    cursor: 'pointer',

    _pressed: {
      transform: 'translate(0, 1px)',
    },

    _hover: {
      backgroundColor: '#252525',
      transform: 'translate(0, -1px)',
    },

    _disabled: {
      color: 'foreground.800',
      cursor: 'not-allowed',

      _hover: {
        transform: 'translate(0)',
        backgroundColor: 'transparent',
      },
    },

    '&[data-selected="true"]': {
      bgColor: '#323232',

      _hover: {
        bgColor: '#323232',
      },
    },
  },
})
