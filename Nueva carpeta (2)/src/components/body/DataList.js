import React, { useState } from 'react';
import { data } from './data';
import Card from './Card';
import './DataList.css'; // Archivo CSS para estilos
import { Link } from 'react-router-dom'
export const DataList = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };




  // Filtrar las definiciones que comienzan con la letra seleccionada
  const filteredData = selectedLetter
    ? data.filter(item => item.name.charAt(0).toUpperCase() === selectedLetter)
    : data;

  // Eliminar duplicados usando un conjunto (Set)
  const uniqueFilteredData = Array.from(new Set(filteredData.map(item => item.id)))
    .map(id => {
      return filteredData.find(item => item.id === id);
    });

  const cards = uniqueFilteredData.map(item => (
    <Card key={item.id} items={item} />
  ));

  // Generar botones de A a Z

  const alphabetButtons = Array.from({ length: 26 }, (_, index) => (
    <button
      key={index}
      onClick={() => handleLetterClick(String.fromCharCode(65 + index))}
      className={selectedLetter === String.fromCharCode(65 + index) ? 'active' : ''}
    >
      {String.fromCharCode(65 + index)}
    </button>

  ));


  return (
    <div>
      <Link to="/">
        <button class="btn btn-dark " id='home'>Home</button>
      </Link>
      
        
      
      <div className='data-list-container'>

        <div className='alphabet-buttons'>

          {alphabetButtons}

        </div>
        <div className='divCards'>
          {cards.length > 0 ? cards : <div className='no-data'>No hay definiciones para la letra seleccionada.</div>}
        </div>
      </div>
    </div>
  );
};
