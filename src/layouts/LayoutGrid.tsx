import React, { useState } from 'react';

interface LayoutGridProps {
  title: string;
  children: React.ReactNode;
}

const LayoutGrid: React.FC<LayoutGridProps> = ({ title, children }) => {
  const [isSingleColumn, setIsSingleColumn] = useState(false);

  const handleButtonClick = () => {
    setIsSingleColumn(!isSingleColumn);
  };

  return (
    <section className="section--grid">
      <div className="section__heading section--grid__heading page-width">
        <h2>{title}</h2>
        <button 
        className="medium-hide large-up-hide"
        onClick={handleButtonClick}
        >Layout</button>
      </div>
      <div className={`section__grid section__content page-width${isSingleColumn ? ' section__grid--single-column' : ''}`}>
        {children}
      </div>
    </section>
  );
};

export default LayoutGrid;
