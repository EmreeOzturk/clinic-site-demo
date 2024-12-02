import React from 'react';

interface SectionProps {
  title?: string;
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ 
  title, 
  className = '', 
  id, 
  children 
}) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
};