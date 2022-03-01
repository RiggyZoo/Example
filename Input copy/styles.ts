import styled from '@emotion/styled'
import { colors } from 'generic/themes'
import { css, keyframes } from '@emotion/react'
import { FormikErrors } from 'formik'

interface InputProps {
  disabled?: boolean
  errors?:
    | FormikErrors<{
        [field: string]: any
      }>
    | boolean
}

export const shakeHorizontal = keyframes`
  0%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(5px);
    transform: translateX(5px);
  }
  80% {
    -webkit-transform: translateX(4px);
    transform: translateX(4px);
  }
  90% {
    -webkit-transform: translateX(-4px);
    transform: translateX(-4px);
  }

`
export const Container = styled.div<InputProps>`
  display: inline-flex;
  letter-spacing: 1px;
  flex-direction: column;
  position: relative;

  & > svg {
    position: absolute;
    top: 0.6rem;
    left: 0.3rem;
  }

  ${({ errors }) =>
    errors &&
    css`
      animation: ${shakeHorizontal} 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955)
        both;
    `}
`

export const InputField = styled.input<InputProps>`
  outline: none;
  padding: 0.4rem 0.2rem;
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-family: Rambla-Regular, sans-serif;
  border: 1px solid ${({ errors }) => (errors ? colors.red : colors.primary)};
  background-color: transparent;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.7;
    `}
  &::placeholder {
    letter-spacing: 2px;

    &:before {
    }
  }
`

export const Label = styled.label<InputProps>`
  font-size: 1.2rem;
  color: ${({ errors }) => (errors ? colors.red : colors.black)};
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
    `}
`

export const ErrorMessage = styled.span`
  display: flex;
  top: 4rem;
  position: absolute;
  align-items: center;
  color: ${colors.red};
  font-size: 0.9rem;
  & > svg {
    margin-right: 0.3rem;
  }
`
