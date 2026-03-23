'use client';

import React, { useState } from 'react';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const calculatedBmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(calculatedBmi);

      if (calculatedBmi < 18.5) {
        setCategory('Underweight');
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        setCategory('Normal');
      } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case 'Normal':
        return 'text-green-500';
      case 'Overweight':
        return 'text-yellow-500';
      case 'Obese':
      case 'Underweight':
        return 'text-red-500';
      default:
        return 'text-white';
    }
  };

  return (
    <div className="bg-black-card border border-gray-700 rounded-lg p-6 sm:p-8 max-w-md mx-auto card-hover hover:border-gold/40">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">BMI Calculator</h3>
      <form onSubmit={calculateBMI} className="space-y-4">
        <div>
          <label className="block text-gray-400 text-sm mb-2">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g., 175"
            className="w-full bg-black-deep border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:border-gold"
            required
          />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-2">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g., 70"
            className="w-full bg-black-deep border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:border-gold"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gold text-black-deep font-semibold py-3 rounded-md hover:bg-white transition-colors duration-300"
        >
          Calculate BMI
        </button>
      </form>
      {bmi && (
        <div className="mt-6 text-center animate-fade-in-up">
          <p className="text-gray-400 text-sm mb-1">Your BMI is</p>
          <p className="text-4xl font-extrabold text-white mb-2">{bmi}</p>
          <p className={`text-lg font-semibold ${getCategoryColor()}`}>
            {category}
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Start your transformation at MR7!
          </p>
        </div>
      )}
    </div>
  );
}
