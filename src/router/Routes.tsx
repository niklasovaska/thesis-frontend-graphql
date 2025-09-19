import { createRoutesFromElements, Route } from 'react-router'
import Layout from '@/components/layout/Layout.tsx'
import HomePage from '@/pages/HomePage.tsx'
import AlbumPage from '@/pages/AlbumPage.tsx'
import NotFoundPage from '@/pages/NotFoundPage'

const ErrorPage = () => {
    return(
        <Layout>
            <NotFoundPage />
        </Layout>
    )
}

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
    <Route index element={<HomePage />} />
    <Route path="album/:slug" element={<AlbumPage />} />
  </Route>
)

export default routes