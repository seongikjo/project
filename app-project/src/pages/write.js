import React from 'react'
// import Editor from '../components/write/Editor'
import Responsive from '../components/common/Responsive'
import WriteActionButtons from '../components/write/WriteActionButton'
import EditorContainer from '../containers/write/EditorContainer'
import TagBoxContainer from '../containers/write/TagBoxContainer'
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer'

const Write = () => {
  return (
    <Responsive>
      <EditorContainer />
      {/* <Editor /> */}
      <TagBoxContainer />
      <WriteActionButtons />
      <WriteActionButtonsContainer />
    </Responsive>
  )
}

export default Write
