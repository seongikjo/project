import React from 'react'
import styled from 'styled-components'
import palette from '../../lib/styles/palette'

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: #fff;
  outline: none;
  cursor: pointer;

  background: ${palette.mint[0]};
  &:hover {
    background: ${palette.mint[1]};
  }

  ${(props) =>
    props.fullWidth &&
    `
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    `
    background: ${palette.mint[0]};
      &:hover {
        background: ${palette.mint[1]};
      }
    `}
`

const Button = (props) => <StyledButton {...props} />

export default Button
