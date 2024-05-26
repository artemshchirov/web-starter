import { FC, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import PageSpinner from './components/ui/PageSpinner'
import routes from './routes'

const App: FC = () => {
  return (
    <Suspense fallback={<PageSpinner />}>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Suspense>
  )
}

export default App
