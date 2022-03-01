import React from 'react'
import { Color } from '../themes'
import { StyledButton } from './styles'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: Color
  color?: Color
  view?: string
}

export const Button: React.FC<IButton> = ({ children, view, ...rest }) => {
  return (
    <StyledButton type="button" view={view} {...rest}>
      {children}
    </StyledButton>
  )
}
