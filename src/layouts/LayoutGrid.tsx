import React from 'react';

interface LayoutGridProps {
  title: string;
  children: React.ReactNode;
}

const LayoutGrid: React.FC<LayoutGridProps> = ({ title, children }) => {
  return (
    <section className="section--grid">
      <h2>{title}</h2>
      <div className="section__grid section__content page-width">
        {children}
      </div>
    </section>
  );
};

export default LayoutGrid;
