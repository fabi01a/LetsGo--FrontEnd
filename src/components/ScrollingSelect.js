import React, { useState } from 'react';
// import ActivityOptions from '../components/ActivityOptions'

const ScrollingSelect = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState('');
    
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='scrolling-select'>
            <div className='select-container'>
                <select className='select-dropdown'value={selectedOption} onChange={handleSelectChange}>
                    {options.map((option,index) => (
                        <option key={option.value} value={option.value}>
                            {option.value}
                        </option>
                    ))}
                </select>    
            </div>  
        </div>
    );
};

export default ScrollingSelect;
