import React from 'react'
import NavBar from './components/NavBar.jsx';
import './App.css';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer Drummer={"Drummer"}/> 
    </>
  );
}

export default App;
