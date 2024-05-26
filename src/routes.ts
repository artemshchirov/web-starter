import { lazy } from 'react'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '*', component: NotFound },
]

export default routes
