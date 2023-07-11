import React, { useState } from 'react';
import './calculator.css';
const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(0);

    const handleNum1Change = (e) => {
        setNum1(e.target.value);
    };

    const handleNum2Change = (e) => {
        setNum2(e.target.value);
    };

    const handleAddition = () => {
        const sum = parseInt(num1) + parseInt(num2);
        setResult(sum);
    };

    const handleSubtraction = () => {
        const difference = parseInt(num1) - parseInt(num2);
        setResult(difference);
    };

    const handleMultiplication = () => {
        const product = parseInt(num1) * parseInt(num2);
        setResult(product);
    };

    const handleDivision = () => {
        const quotient = parseInt(num1) / parseInt(num2);
        setResult(quotient);
    };

    return (
        <div className="calculator-container">
            <div className="calculator-inputs">
                <input type="number" value={num1} onChange={handleNum1Change} />
                <br/>
                <input type="number" value={num2} onChange={handleNum2Change} />
            </div>
            <div className="calculator-buttons">
                <button onClick={handleAddition}>+</button>
                <button onClick={handleSubtraction}>-</button>
                <button onClick={handleMultiplication}>x</button>
                <button onClick={handleDivision}>/</button>
            </div>
            <div className="calculator-result">Result: {result}</div>
        </div>
    );
};
export default Calculator;