import { ComponentProps, forwardRef } from 'react'
import { BaseInput, Control, Hint, Label } from './styles'

interface IInputProps extends ComponentProps<typeof BaseInput> {
  label?: string
  hint?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, hint, error, ...rest }, ref) => {
    return (
      <Control>
        {label && <Label htmlFor={rest.name}>{label}</Label>}
        <BaseInput name={rest.name} ref={ref} {...rest} />
        {hint || (error && <Hint>{error ?? hint}</Hint>)}
      </Control>
    )
  }
)
