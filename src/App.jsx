import { useState } from 'react';
import './App.css';
import Cards from './Componentes/Cards/Cards';
import FilterCategory from './Componentes/Filter/FilterCategory.jsx/FilterCategory';
import FilterColor from './Componentes/Filter/FilterColor/FilterColor';
import OrderRating from './Componentes/Order/Order';


function App() {
  const [filters,setFilters]=useState({
    prince:null,
    color:null,
    rating:null
})

  return (
    <div className="App">
      <h1>Prueba Tecnica</h1>
      <FilterColor/>
      <FilterCategory/>
      <OrderRating/>
      <Cards onChange={(filter)=> setFilters(filters =>({...filters,color:filter}))}/>
    </div>
  );
}

export default App;
