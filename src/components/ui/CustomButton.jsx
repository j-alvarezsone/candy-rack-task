import React from 'react';

export const CustomButton = ({ firstIcon, label, className, type, handleClick, secondIcon, children }) => {
  return (
    <>
      <button className={className} type={type} onClick={() => handleClick()}>
        {firstIcon}
        {label}
        {children}
        {secondIcon}
      </button>
    </>
  );
};
