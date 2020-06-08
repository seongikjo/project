import styled from 'styled-components'
import COLORS from '../color'

export default styled.span`
  ${({ size }) => `font-size: ${size || 13}px;`}
  ${({ block }) => block && `display: block;`}
  ${({ bold }) => bold && `font-weight: bold;`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ color }) => `color: ${COLORS[color] || COLORS.black};`}
`
