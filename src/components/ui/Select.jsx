import React from 'react';

export const Select = ({ selectClassName, optionClassName, handleChange }) => {
  const options = [
    {
      label: 'Regular',
      value: 'regular',
    },
    {
      label: 'Medium',
      value: 'medium',
    },
    {
      label: 'Large',
      value: 'large',
    },
  ];
  return (
    <>
      <select className={selectClassName} onChange={handleChange}>
        {options.map((option) => (
          <option className={optionClassName} key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};
