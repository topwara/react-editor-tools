// Lib
import { useCallback, useRef } from 'react'
import { createReactEditorJS } from 'react-editor-js'
import { EditorConfig, OutputData } from '@editorjs/editorjs'

// Include
import { EDITOR_JS_TOOLS } from './tools'

type TEditor = {
  data: EditorConfig['data']
  setData: React.Dispatch<React.SetStateAction<OutputData>>
}

const Editor = ({ data, setData }: TEditor): JSX.Element => {
  const editorCore = useRef<any>(null)
  const ReactEditorJS = createReactEditorJS()

  const handleInitialize = useCallback((instance: { _editorJS: { isReady: Promise<any> } }) => {
    instance._editorJS.isReady
      .then(() => (editorCore.current = instance))
      .catch((err) => console.log('An error occured', err))
  }, []) as any

  const handleSave = useCallback(async () => {
    const savedData = await editorCore.current.save()
    console.log('🚀 ~ handleSave ~ savedData:', savedData)
    setData(savedData)
  }, [setData])

  return (
    <div className="editor-container">
      <p></p>
      <ReactEditorJS
        defaultValue={data}
        tools={EDITOR_JS_TOOLS}
        onChange={handleSave}
        onInitialize={handleInitialize}
      />
    </div>
  )
}

export default Editor
