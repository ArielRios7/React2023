import React from 'react'
import NavBar from './components/NavBar.js';
import './App.css';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer Drummer={"Drummer"}/> 
  );
}

export default App;
