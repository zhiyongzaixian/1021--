
import Home from '../components/Home'
import Personal from '../components/Personal'

export default [
  {
    path: '/home/:id',
    component: Home,
    name: 'Home'
  },
  {
    path: '/personal',
    component: Personal,
    name: 'personal'
  }
]
