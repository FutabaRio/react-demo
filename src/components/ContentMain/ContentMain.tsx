import CardsC from '../Cards/Cards'

export const ContentMain = () => {
  return (
    <div className="content-main-holder grid gap-y-5">
      <div className="content-grid-one grid gap-x-4 grid-cols-3">
        <CardsC />
      </div>
      <div className="content-grid-two grid gap-x-4 grid-cols-3">
        <div className="grid-two item">
          <div className="subgrid-two grid gap-y-5 h-full">two</div>
        </div>
        <div className="grid-two item">
          <div className="subgrid-two grid gap-y-5 h-full">two</div>
        </div>
      </div>
    </div>
  )
}
