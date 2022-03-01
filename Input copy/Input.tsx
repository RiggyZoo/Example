import React, { FC, ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'
import { ErrorMessageIcon } from 'icons/ErrorInputMessageIcon'
import { Container, InputField, Label, ErrorMessage } from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: ForwardedRef<HTMLInputElement>
  required?: boolean
  isTouched?: boolean
  error?: string
  label?: string
}

export const Input: FC<InputProps> = forwardRef(
  ({ required, isTouched, error, label, name, disabled, ...rest }, ref) => {
    return (
      <Container errors={Boolean(isTouched && error)}>
        <Label
          disabled={disabled}
          errors={Boolean(isTouched && error)}
          htmlFor={name}
        >{`${required ? `${label}*` : label}`}</Label>
        <InputField
          ref={ref}
          disabled={disabled}
          id={name}
          errors={Boolean(isTouched && error)}
          {...rest}
        />
        {isTouched && error && (
          <ErrorMessage>
            <ErrorMessageIcon size={10} />
            {error}
          </ErrorMessage>
        )}
      </Container>
    )
  },
)
