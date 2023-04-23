import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Landing from '../src/components/Landing';
import Pricing from '../src/components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
})

function App() {
  return (
    <div>
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/pricing' element={<Pricing />} />
                    <Route path='/' element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </StylesProvider>
    </div>
  )
}

export default App