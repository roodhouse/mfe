import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
// import { BrowserRouter } from 'react-router-dom';
import { Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
})

function App() {
  return (
    
      <StylesProvider generateClassName={generateClassName}>
      
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    
  );
}

export default App