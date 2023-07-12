import React, { useState } from 'react';
import './App.css';

const carList = ['Toyota', 'Honda', 'BMW', 'Ford', 'Mercedes-Benz'];
const colorList = ['Red', 'Blue', 'Green', 'Black', 'White'];

function App() {
  const [selectedCar, setSelectedCar] = useState({
    car: carList[0],
    color: colorList[0]
  });

  const handleCarChange = (e) => {
    setSelectedCar(previousState => {
      return {
        ...previousState,
        car: e.target.value
      };
    });
  };

  const handleColorChange = (e) => {
    setSelectedCar(previousState => {
      return {
        ...previousState,
        color: e.target.value
      };
    });
  };

  return (
    <div className="container">
      <h1>Select your car</h1>
      <div className="select-container">
        <label htmlFor="car">Select a car:</label>
        <select id="car" value={selectedCar.car} onChange={handleCarChange}>
          {carList.map((car, index) => (
            <option key={index} value={car}>{car}</option>
          ))}
        </select>
      </div>
      <div className="select-container">
        <label htmlFor="color">Select a color:</label>
        <select id="color" value={selectedCar.color} onChange={handleColorChange}>
          {colorList.map((color, index) => (
            <option key={index} value={color}>{color}</option>
          ))}
        </select>
      </div>
      <div className="result-container">
        <p>You selected a <span className="selected-color">{selectedCar.color}</span> - <span className="selected-car">{selectedCar.car}</span></p>
      </div>
    </div>
  );
}

export default App;
