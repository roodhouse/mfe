import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import Landing from '../components/Landing';
import Pricing from '../components/Pricing';

function App() {
  return (
    <div>
        <StylesProvider>
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