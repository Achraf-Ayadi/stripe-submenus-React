import React, { useState, useRef, useEffect } from 'react'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext()
  const container = useRef(null)
  const [colum, setColum] = useState('col-2')

  useEffect(() => {
    setColum('col-2')
    const submenu = container.current
    const { btnCenter, btnBottom } = location
    submenu.style.left = `${btnCenter}px`
    submenu.style.top = `${btnBottom}px`

    if (links.length === 3) {
      setColum('col-3')
    }
    if (links.length > 3) {
      setColum('col-4')
    }
    // console.log(submenu)
  }, [location, page, links])
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : ' submenu'}`}
      ref={container}
    >
      <div className={`submenu-center ${colum}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
