import { BrowserRouter } from 'react-router-dom'
import { SWRConfig } from 'swr'
import { FCC } from 'types'

import { Button } from 'components/Button'

import { GlobalErrorBoundary } from './components/GlobalErrorBoundary'

export const App: FCC = ({ children }) => {
  return (
    <>
      <SWRConfig>
        <GlobalErrorBoundary>
          <BrowserRouter>{children}</BrowserRouter>
        </GlobalErrorBoundary>
        <Button />
      </SWRConfig>
    </>
  )
}
