import logo from './logo.svg';
import './App.css';
import { DataList } from './components/body/DataList';
import Inicio from './components/inicio';
import { Routes, Route, HashRouter } from "react-router-dom"



function App() {
  return (
    
      <HashRouter>
        <Routes>
        <Route exact path='/' element={<Inicio />} />
        <Route exact path='/datos' element={<DataList/>} />
          
          
        </Routes>
      </HashRouter>
    
  );
}

export default App;
