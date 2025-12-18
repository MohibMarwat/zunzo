import { Navigate, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes/PublicRoutes'
// import './App.css'

function App() {
  return (
    <div className='h-screen'>
      <Routes>
        {publicRoutes?.map((route: any, index: number) => {
          return (
            <Route
              key={index}
              caseSensitive={route.exact}
              path={route.path}
              element={route.element}
            />
          )
        })}
        {publicRoutes?.length ? (
          <Route
            path='*'
            element={<Navigate to={`${publicRoutes[0]?.path}`} replace />}
          />
        ) : null}
      </Routes>
    </div>
  )
}

export default App
