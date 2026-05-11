import { BrowserRouter, Route, Routes } from 'react-router'
import { MainLayout } from '@/components/layout'
import {
  HomePage,
  AboutPage,
  ServicesPage,
  ProductsPage,
  FarmersPage,
  ContactPage,
  NotFoundPage,
} from '@/pages'
import { ROUTES } from '@/constants/routes'

const GlobalRoute = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
        <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
        <Route path={ROUTES.FARMERS} element={<FarmersPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default GlobalRoute
