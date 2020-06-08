import React from 'react'
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs'

import Button from '.'

export default {
  title: 'button',
  component: Button,
  decorators: [text, boolean, number, select],
}

export const BasicButton = () => {
  return (
    <Button
      margin={text('margin')}
      fontSize={number('fontSize', 16)}
      full={boolean('full', false)}
      color={select('color', ['black', 'red', 'gray', 'mint'], 'mint')}
    >
      버튼
    </Button>
  )
}

export const BasicButton2 = () => {
  return (
    <Button
      margin={text('margin')}
      fontSize={number('fontSize', 16)}
      full={boolean('full', false)}
      color={select('color', ['black', 'red', 'gray', 'mint'], 'mint')}
    >
      텍스트 버튼
    </Button>
  )
}

BasicButton.story = {
  name: '기본버튼',
}
BasicButton2.story = {
  name: '텍스트버튼',
}
