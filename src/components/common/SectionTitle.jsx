import React from 'react';

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl font-extrabold text-primary">{title}</h2>
      {subtitle && <p className="text-sm text-base-content/70 mt-2">{subtitle}</p>}
    </div>
  );
}