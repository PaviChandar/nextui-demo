import { createTheme, NextUIProvider } from '@nextui-org/react';
import * as React from 'react'
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Product from './components/Product';

const App = () => {

  const theme = createTheme({
    type: "light",
    theme: {
      colors: {
        primary: '#4ADE7B',
        secondary: '#F9CB80',
        error: '#FCC5D8',
      }
    }
  })

  return (
    <NextUIProvider theme={theme} >
      <Navbar />
      <>
        <Routes>
          <Route path='/' element={<Product />} >Product</Route>
          <Route path='/cart' element={<Cart />} >Cart</Route>
        </Routes>
      </>
    </NextUIProvider>
  );
}

export default App;
