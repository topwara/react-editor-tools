// Lib
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Delimiter from '@editorjs/delimiter'
import Image from '@editorjs/image'

// Include

const getBase64 = async (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
  })
}

export const EDITOR_JS_TOOLS: any = {
  // ok
  header: Header,
  list: List,
  delimiter: Delimiter,
  image: {
    class: Image,
    config: {
      uploader: {
        async uploadByFile(file: any) {
          const base64Img = await getBase64(file)
            .then((res) => res)
            .catch((err) => console.log(err))

          return { success: 1, file: { url: `${base64Img}` } }
        },
      },
    },
  },
}
