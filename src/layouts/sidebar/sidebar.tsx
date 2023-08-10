import { navigationLinks } from 'data/data'

import { personsImgs } from 'utils/images'

const Sidebar = () => {
  return (
    <div className="sidebar w-64 bg-clr-primary py-9 px-5">
      <div className="user-info flex justify-start items-center gap-4 columns-4">
        <div className="info-img w-12 h-12 overflow-hidden rounded-full shadow-2xl">
          <img src={personsImgs.person_two} alt="perfileimage" />
        </div>
        <span className="info-name font-medium text-xl text-clr-white uppercase">
          alice-doe
        </span>
      </div>
      <nav className="navigation mt-7 h-150 overflow-auto">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li key={navigationLink.id} className="nav-item mb-2.5 mr-1">
              <a
                href="N"
                className="nav-link  h-11 rounded-lg flex items-center
                justify-start pt-1.5 pb-3.5 gap-3 tracking-wide border-solid border-transparent  transition ease-in-out delay-50
                hover:solid hover:bg-clr-primar-light hover:border active:bg-clr-pumpkin active:shadow-lg"
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
