import React from 'react';

export const Select = ({ selectClassName, optionClassName, option1, option2, option3 }) => {
  return (
    <>
      <select className={selectClassName}>
        <option className={optionClassName}>{option1}</option>
        <option className={optionClassName}>{option2}</option>
        <option className={optionClassName}>{option3}</option>
      </select>
    </>
  );
};
