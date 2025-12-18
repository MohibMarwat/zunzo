import CommonErrorPage from '../components/404/CommonErrorPage'
import LandingPage from '../pages/landingPage/LandingPage'

export const publicRoutes = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '*',
    element: (
      <CommonErrorPage
        contentMessage='Sorry, the page you are looking for does not exist.'
        titleError='404'
        titleMessage='OPS! Page not found'
      />
    ),
  },
]
