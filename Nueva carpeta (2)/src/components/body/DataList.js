import React, { useState } from 'react';
import { data } from './data';
import Card from './Card';
import './DataList.css'; // Archivo CSS para estilos
import { Link } from 'react-router-dom';

export const DataList = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRecharge = () => {
    setSelectedLetter(null);
    setSearchTerm('');
  };

  const filteredData = data.filter((item) => {
    const nameMatchesLetter = !selectedLetter || item.name.charAt(0).toUpperCase() === selectedLetter;
    const nameMatchesSearch = searchTerm.trim() === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return nameMatchesLetter && nameMatchesSearch;
  });

  const uniqueFilteredData = Array.from(new Set(filteredData.map(item => item.id)))
    .map(id => {
      return filteredData.find(item => item.id === id);
    });

  const cards = uniqueFilteredData.map(item => (
    <Card key={item.id} items={item} />
  ));

  const alphabetButtons = Array.from({ length: 26 }, (_, index) => (
    <button
      key={index}
      onClick={() => handleLetterClick(String.fromCharCode(65 + index))}
      className={selectedLetter === String.fromCharCode(65 + index) ? 'active' : ''}
    >
      {String.fromCharCode(65 + index)}
    </button>
  ));
  //j

  return (
    <div>
      <div className="fixed-search">
        <input
          className="form-control"
          id='input'
          type='search'
          placeholder='Buscar'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="nav-buttons" >
        <Link to="/">
          <button className="btn btn-dark" id='h'>Home</button>
        </Link>
        
      </div>
      <div >
      <button className="btn btn-dark" id='h' onClick={handleRecharge}>Recharge</button>
      </div>

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
