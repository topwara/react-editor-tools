// Lib
import React, { useState } from 'react'

// Include
import './Navbar.scss'

type TNavbar = { setClickEdit: React.Dispatch<React.SetStateAction<boolean>> }

const Navbar = ({ setClickEdit }: TNavbar): JSX.Element => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false)

  const toggleEditMode = (): void => {
    if (isEditMode) {
      setIsEditMode(false)
      setClickEdit(false)
      console.log('Edit mode is now disabled')
    } else {
      setIsEditMode(true)
      setClickEdit(true)
      console.log('Edit mode is now enabled')
    }
  }

  const edit = {
    color: isEditMode ? 'green' : 'gray',
    text: isEditMode ? 'บันทึก' : 'แก้ไข',
    note: isEditMode ? <span>กำลังแก้ไขข้อความ 📝</span> : null,
  }

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="https://editorjs.io/_nuxt/logo.d2a59c1c.svg" alt="" />
        <h1>Editor.js {edit.note}</h1>
      </div>
      <div className="navbar-button">
        <button className="button" onClick={toggleEditMode} style={{ backgroundColor: edit.color }}>
          {edit.text}
        </button>
      </div>
    </div>
  )
}

export default Navbar
