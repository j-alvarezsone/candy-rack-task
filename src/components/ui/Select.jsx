import React from 'react';

export const Select = ({ selectClassName, optionClassName }) => {
  return (
    <>
      <select className={selectClassName}>
        <option className={optionClassName}>Regular</option>
        <option className={optionClassName}>Medium</option>
        <option className={optionClassName}>Large</option>
      </select>
    </>
  );
};
