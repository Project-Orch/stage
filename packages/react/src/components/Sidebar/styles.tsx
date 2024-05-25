import { css } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const content = css({
  display: 'flex',
  flex: 1,
  h: 'max-content',
  flexDir: 'column',

  bgColor: 'neutral.600',
  borderRightWidth: '1px',
  borderColor: 'foreground.800',

  p: '12px 16px',
  gap: '24px',

  color: 'foreground.300',
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
