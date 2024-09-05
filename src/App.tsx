// Lib
import React, { useState } from 'react'
import { OutputData } from '@editorjs/editorjs'

// Include
import './App.scss'
import sampleData from './editor/data'
import Editor from './editor/Editor'
import EditorTextParser from './editor/EditorParser'

const App = ({ click }: { click: boolean }): JSX.Element => {
  const [data, setData] = useState<OutputData>(sampleData)

  return (
    <div className="App">
      <div className="app-content">
        {click ? <Editor data={data} setData={setData} /> : <EditorTextParser data={data} />}
      </div>
    </div>
  )
}

export default App
