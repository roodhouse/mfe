import React from 'react';
import { Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from '../src/components/Landing';
import Pricing from '../src/components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
})

const router = createBrowserRouter(
  [
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Landing />
        },
        {
          path: 'pricing',
          element: <Pricing />
        },
      ],
    },
  ],
  {
    basename: '/'
  }
)

function App() {
  return (
    <div>
        <StylesProvider generateClassName={generateClassName}>
            <RouterProvider router={router}>
                <Routes>
                    <Route exact path='/pricing' element={<Pricing />} />
                    <Route path='/' element={<Landing />} />
                </Routes>
            </RouterProvider>
        </StylesProvider>
    </div>
  )
}

export default App