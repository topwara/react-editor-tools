// Lib
import edjsParser from 'editorjs-html'
import parse from 'html-react-parser'
import { OutputData } from '@editorjs/editorjs'

const parser = edjsParser()

const EditorTextParser = ({ data }: { data: OutputData }) => {
  const html = parser.parse(data)
  return <div className="text-container">{parse(html.join(''))}</div>
}

export default EditorTextParser
