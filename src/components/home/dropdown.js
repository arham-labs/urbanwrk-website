"use client"
import React, { useState } from 'react';

const BasicSelect = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className="w-72  ">
            <select
                id="age"
                name="age"
                value={age}
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
            >
                <option value="" disabled hidden style={{ color: '#A5A5A5' }}>
                    City
                </option>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
            </select>
        </div>
    );
};

export default BasicSelect;
