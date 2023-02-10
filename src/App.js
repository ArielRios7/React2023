import React from 'react'
import './App.css';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
