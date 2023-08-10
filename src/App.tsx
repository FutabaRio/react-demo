import Content from 'layouts/content/content'
import Sidebar from 'layouts/sidebar/sidebar'

import './index.css'

export const App = () => {
  return (
    <>
      <div className="App">
        <Sidebar />
        <Content />
      </div>
    </>
  )
}
