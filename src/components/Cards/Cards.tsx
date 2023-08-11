import { iconsImgs } from 'utils/images'

const Cards = () => {
  return (
    <div className="grid-one-item grid-common grid-c1 flex flex-col">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Cards</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="" />
        </button>
      </div>
      <div className="grid-c1-content flex-1 rounded-lg p-4 ">
        <p>Balance</p>
        <div className="lg-value mt-2 mb-4 text-cyan-50">$ 22,000</div>
        <div className="card-wrapper flex">
          <span className="card-pin-hidden text-4xl mr-2">**** **** **** </span>
          <span className="card-pin-hidden-span text-clr-silver">1234</span>
        </div>
        <div className="card-logo-wrapper flex justify-between items-center">
          <div>
            <p className="text text-silver-v1 expiry-text">Expires</p>
            <p className="text text-sm text-white">12/22</p>
          </div>
          <div className="card-logo flex">
            <div className="logo-shape1 w-9 h-9 rounded-full bg-[rgba(255,30,0,0.75)] z-0 -mr-4" />
            <div className="logo-shape2 w-9 h-9 rounded-full bg-clr-yellow" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
