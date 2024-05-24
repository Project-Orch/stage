import { styled } from '@/styled-system/jsx'

export const BaseInput = styled('input', {
  base: {
    appearance: 'none',
    background: 'none',
    borderColor: 'foreground.200',
    borderRadius: 'sm',
    borderWidth: '1px',
    color: 'foreground.100',
    position: 'relative',
    transition: '0.2s',
    width: 'max-content',
    m: 0,
    outline: 0,

    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    _focus: {
      outlineWidth: '1px',
      outlineStyle: 'solid',
      outlineColor: 'purple.600',

      borderColor: 'purple.600',
    },
    _placeholder: {
      color: 'foreground.600',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
  variants: {
    size: {
      xs: { px: '0.5rem', py: '6px', fontSize: 'sm', lineHeight: '20px' },
      sm: { px: '0.75rem', py: '8px', fontSize: 'sm', lineHeight: '20px' },
      md: { px: '12px', py: '8px', fontSize: 'md', lineHeight: '24px' },
      lg: { px: '0.9rem', py: '10px', fontSize: 'md', lineHeight: '24px' },
    },
  },
})

export const Label = styled('label', {
  base: {
    color: 'foreground.100',

    fontWeight: 'medium',
    fontSize: 'sm',
  },
})

export const Control = styled('div', {
  base: {
    display: 'flex',
    flexDir: 'column',

    gap: '6px',
  },
})

export const Hint = styled('span', {
  base: {
    fontSize: 'sm',

    color: 'foreground.600',
  },
})
