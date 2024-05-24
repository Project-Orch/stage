import { ComponentProps, MutableRefObject, forwardRef } from 'react'
import type { Assign } from '@ark-ui/react'
import { type HTMLArkProps, ark } from '@ark-ui/react'
import { styled } from '@/styled-system/jsx'
import { type ButtonVariantProps, button } from '@/styled-system/recipes'
import type { JsxStyleProps } from '@/styled-system/types'

export interface ButtonProps
  extends Assign<JsxStyleProps, HTMLArkProps<'button'>>,
    ButtonVariantProps {}
export const ParkUiButton = styled(ark.button, button)

interface IButtonProps extends ComponentProps<typeof ParkUiButton> {
  loading?: boolean
  placeholder?: string
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ loading, placeholder = '', ...rest }, ref) => {
    return (
      <ParkUiButton ref={ref} data-loading={loading} {...rest}>
        {loading ? placeholder : rest.children}
      </ParkUiButton>
    )
  }
)
