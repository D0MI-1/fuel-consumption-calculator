import React, { useState, useEffect } from 'react';

const FuelCalculator = () => {
    const [distance, setDistance] = useState('');
    const [fuelAmount, setFuelAmount] = useState('');
    const [kmPerLiter, setKmPerLiter] = useState('');
    const [litersPerHundredKm, setLitersPerHundredKm] = useState('');
    const [fuelCost, setFuelCost] = useState('');
    const [totalCost, setTotalCost] = useState('');

    useEffect(() => {
        if (distance && fuelAmount) {
            const kmPerL = parseFloat(distance) / parseFloat(fuelAmount);
            const lPer100Km = (100 * parseFloat(fuelAmount)) / parseFloat(distance);
            setKmPerLiter(kmPerL.toFixed(2));
            setLitersPerHundredKm(lPer100Km.toFixed(2));
        } else {
            setKmPerLiter('');
            setLitersPerHundredKm('');
        }
    }, [distance, fuelAmount]);

    useEffect(() => {
        if (litersPerHundredKm && fuelCost && distance) {
            const cost = (parseFloat(litersPerHundredKm) / 100) * parseFloat(fuelCost) * parseFloat(distance);
            setTotalCost(cost.toFixed(2));
        } else {
            setTotalCost('');
        }
    }, [litersPerHundredKm, fuelCost, distance]);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Fuel Consumption Calculator</h1>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Kilometers per liter and Liters per 100km calculator</h2>
                <div className="mb-4">
                    <label htmlFor="distance" className="block text-sm font-medium text-gray-700 mb-1">Distance driven
                        (km)</label>
                    <input
                        id="distance"
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter distance"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="fuelAmount" className="block text-sm font-medium text-gray-700 mb-1">Fuel refilled
                        (liters)</label>
                    <input
                        id="fuelAmount"
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter fuel amount"
                        value={fuelAmount}
                        onChange={(e) => setFuelAmount(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <p className="font-medium">Kilometers per liter: <span className="font-normal">{kmPerLiter}</span>
                    </p>
                    <p className="font-medium">Liters per 100km: <span
                        className="font-normal">{litersPerHundredKm}</span></p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Fuel Cost Calculator</h2>
                <div className="mb-4">
                    <label htmlFor="fuelCost" className="block text-sm font-medium text-gray-700 mb-1">Fuel cost per
                        liter</label>
                    <input
                        id="fuelCost"
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter fuel cost per liter"
                        value={fuelCost}
                        onChange={(e) => setFuelCost(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <p className="font-medium">Total fuel cost: <span className="font-normal">{totalCost}</span></p>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Formulas:</h3>
                <div className="space-y-4 font-serif text-lg">
                    <p>
                        <strong>Kilometers per liter:</strong> Km/L =
                        <span className="inline-block align-middle mx-1">
              <span className="block border-b border-black text-center px-1">Distance driven</span>
              <span className="block text-center px-1">Fuel refilled</span>
            </span>
                    </p>
                    <p>
                        <strong>Liters per 100km:</strong> L/100km =
                        <span className="inline-block align-middle mx-1">
              <span className="block border-b border-black text-center px-1">100 × Fuel refilled</span>
              <span className="block text-center px-1">Distance driven</span>
            </span>
                    </p>
                    <p>
                        <strong>Fuel cost:</strong> Cost =
                        <span className="inline-block align-middle mx-1">
              <span className="block border-b border-black text-center px-1">Fuel used per 100km</span>
              <span className="block text-center px-1">100</span>
            </span>
                        × Fuel cost per liter × Distance driven
                    </p>
                </div>
            </div>
        </div>
    );
};

            export default FuelCalculator;