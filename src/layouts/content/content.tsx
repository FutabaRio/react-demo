import { ContentMain } from 'components/ContentMain/ContentMain'
import { ContentTop } from 'components/ContentTop/ContentTop'

const Content = () => {
  return (
    <>
      <div className="main-content bg-clr-secondary flex-1 p-8">
        <ContentTop />
        <ContentMain />
      </div>
    </>
  )
}
export default Content
