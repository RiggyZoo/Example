import styled from '@emotion/styled'
import { Color, colors, shadows } from '../themes'

interface IButton {
  backgroundColor?: Color
  color?: Color
  view?: string
}

export const StyledButton = styled.button<IButton>`
  position: relative;
  padding: ${({ view }) => (view ? '1rem 2rem' : ' 0.375rem 1rem')};
  text-decoration: none;
  text-align: center;
  line-height: 1.5rem;
  outline: none;
  background-color: ${({ backgroundColor }) =>
    colors[backgroundColor || 'secondary']};
  white-space: nowrap;
  font-size: 1rem;
  letter-spacing: 0.145rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  color: ${({ color }) => colors[color || 'white']};
  filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.25));

  &:hover {
    box-shadow: ${shadows.hover};
    transform: scale(1.03);
  }
  &:active {
    box-shadow: ${shadows.active};
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.7;
    filter: none;
    cursor: not-allowed;

    &:hover {
      transform: none;
    }
  }
`
