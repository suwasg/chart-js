import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const Dashboard = lazy(() => import('./pages/Dashboard'));
// const NotFound = lazy(() => import('./pages/NotFound'));


const MyRoutes = () => {
  return (
    <>
    <Router>
    <Suspense
        fallback={
          <>
          <p>Loading...</p>
          </>
        }
      >   
      <Routes>
            <Route index element={<Dashboard/>}/>
 
          {/* <Route path='/*' element={<NotFound/>}/> */}
        
           
        </Routes>

        </Suspense>
    </Router>


    </>
  )
}

export default MyRoutes