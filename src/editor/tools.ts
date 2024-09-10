// Lib
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Delimiter from '@editorjs/delimiter'
import Image from '@editorjs/image'
import RawTool from '@editorjs/raw'
// import GoogleMap from './google-map'

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
  // googleMap: {
  //   class: GoogleMap,
  //   inlineToolbar: true,
  //   config: {
  //     placeholder: 'Place or lat and long eg: 15.9383,100.293833 ...',
  //     searchValue: 'Search',
  //   },
  // },
  raw: RawTool,
}
