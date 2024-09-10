// Lib
import edjsParser from 'editorjs-html'
import parse from 'html-react-parser'
import { OutputData } from '@editorjs/editorjs'

const customParsers = {
  raw: (block: any) => `<div>${block.data.html}</div>`,
}

const parser = edjsParser(customParsers)

const EditorTextParser = ({ data }: { data: OutputData }) => {
  const html = parser.parse(data).join('')
  return <div className="text-container">{parse(html)}</div>
}

export default EditorTextParser
