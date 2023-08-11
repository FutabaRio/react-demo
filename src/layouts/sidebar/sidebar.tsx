import { SidebarContext } from 'context/sidebarContext'
import { navigationLinks } from 'data/data'
import { useContext, useEffect, useState } from 'react'

import { personsImgs } from 'utils/images'

const Sidebar = () => {
  const [activeLinkIdx] = useState(1)
  const [sidebarClass, setSidebarClass] = useState('')
  const { isSidebarOpen } = useContext(SidebarContext)

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass('sidebar-open')
    } else {
      setSidebarClass('')
    }
  }, [isSidebarOpen])

  return (
    <div className={`sidebar ${sidebarClass}  w-64 bg-clr-primary py-9 px-5`}>
      <div className="user-info flex justify-start items-center gap-4 columns-4">
        <div className="info-img w-12 h-12 overflow-hidden rounded-full shadow-2xl">
          <img src={personsImgs.person_two} alt="perfileimage" />
        </div>
        <span className="info-name font-medium text-xl text-clr-white uppercase">
          Futaba Rio
        </span>
      </div>
      <nav className="navigation mt-7 h-150 overflow-auto">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li key={navigationLink.id} className="nav-item mb-2.5 mr-1 ">
              <a
                href="/#"
                className={`nav-link ${
                  navigationLink.id === activeLinkIdx ? 'bg-clr-pumpkin' : null
                } h-11 rounded-lg flex items-center justify-start pt-1.5 pb-3.5 gap-3 tracking-wide border-solid border-transparent  transition ease-in-out delay-50 
                hover:border hover:border-clr-primar-light`}
              >
                <img
                  src={navigationLink.image}
                  className="nav-link-icon w-5"
                  alt={navigationLink.title}
                />
                <span className="nav-link-text capitalize">
                  {navigationLink.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
