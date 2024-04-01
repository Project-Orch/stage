import { ComponentProps, MutableRefObject, forwardRef } from 'react'
import { Button as BaseButton } from './styles'

interface IButtonProps extends ComponentProps<typeof BaseButton> {
  loading?: boolean
  placeholder?: string
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ loading, placeholder = '', ...rest }, ref) => {
    return (
      <BaseButton ref={ref} data-loading={loading} {...rest}>
        {loading ? placeholder : rest.children}
      </BaseButton>
    )
  }
)
