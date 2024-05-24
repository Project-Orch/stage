import { css } from '@/styled-system/css'

export const titleStyle = css({
  fontFamily: 'default',
  fontWeight: 'bold !important',
  fontSize: 'md',
  color: 'neutral.700',
  lineHeight: '1.25rem',
})

export const descriptionStyle = css({
  fontFamily: 'default',
  fontWeight: 'medium !important',
  fontSize: 'sm',
  color: 'neutral.700',
})

export const contentStyle = css({
  gap: '0 !important',
})

export const toastStyle = css({
  p: '1rem !important',
  gap: '8px !important',
  alignItems: 'flex-start !important',
})

export const iconStyle = css({
  pt: '0.25rem',
})

export const containerStyle = css({
  "&[data-theme='dark']": {
    backgroundColor: 'neutral.100 !important',
  },

  backgroundColor: 'foreground.100',
})
