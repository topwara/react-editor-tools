// Lib
import { useState } from 'react'
import { createRoot } from 'react-dom/client'

// Include
import App from './App'
import Navbar from './Navbar'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

const All: React.FC = () => {
  const [click, setClick] = useState<boolean>(false)

  return (
    <div>
      <Navbar setClickEdit={setClick} />
      <App click={click} />
    </div>
  )
}
root.render(<All />)
