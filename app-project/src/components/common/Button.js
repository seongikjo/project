import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import palette from '../../lib/styles/palette'

const ButtonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  margin-right: 2rem;
  color: #fff;
  outline: none;
  cursor: pointer;

  background: ${palette.mint[0]};
  &:hover {
    background: ${palette.mint[1]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.mint[0]};
      &:hover {
        background: ${palette.mint[1]};
      }
    `}
`

const StyledButton = styled(Link)`
  ${ButtonStyle}
`

const StyledLink = styled(Link)`
  ${ButtonStyle}
`

const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  )
}

export default Button
