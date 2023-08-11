import { SidebarContext } from 'context/sidebarContext'
import { useContext } from 'react'

import { iconsImgs } from 'utils/images'

export const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext)
  return (
    <div className="main-content-top flex justify-between items-center mb-8 ">
      <div className="content-top-left flex items-center">
        <button
          type="button"
          className="sidebar-toggler flex items-center mr-3 "
          onClick={() => toggleSidebar()}
        >
          <img src={iconsImgs.menu} className="w-5" alt="" />
        </button>
        <h3 className="content-top-title text-clr-white text-xl ">Home</h3>
      </div>
      <div className="content-top-btn ml-4">
        <button type="button" className="search-btn content-top-btn ml-4">
          <img
            src={iconsImgs.search}
            className="w-6 hover:brightness-0 hover:invert"
            alt=""
          />
        </button>
        <button className="notification-btn content-top-btn ml-4">
          <img
            src={iconsImgs.bell}
            className="w-6 hover:brightness-0 hover:invert"
            alt=""
          />
          <span className="notification-btn-dot" />
        </button>
      </div>
    </div>
  )
}
