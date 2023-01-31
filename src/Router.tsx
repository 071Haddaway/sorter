import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Result } from './pages/Result'
import { Sorter } from './pages/Sorter'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Sorter" element={<Sorter />} />
        <Route path="/Result" element={<Result />} />
      </Route>
    </Routes>
  )
}
