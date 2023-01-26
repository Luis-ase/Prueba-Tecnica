import './App.css';
import Cards from './Componentes/Cards/Cards';
import FilterCategory from './Componentes/Filter/FilterCategory.jsx/FilterCategory';
import FilterColor from './Componentes/Filter/FilterColor/FilterColor';
import OrderRating from './Componentes/Order/Order';


function App() {

  return (
    <div className="App">
      <h1>Prueba Tecnica</h1>
      <FilterCategory/>
      <FilterColor/>
      <OrderRating/>
      <Cards/>
    </div>
  );
}

export default App;
