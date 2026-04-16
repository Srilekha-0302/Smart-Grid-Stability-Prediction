import React from "react";

export default function FeatureCard({ title, subtitle, fields, placeholders, values, setValues }) {
  const handleChange = (key, val) => {
    setValues(prev => ({ ...prev, [key]: val }));
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="subtitle">{subtitle}</p>

      <div className="grid2">
        {fields.map(f => (
          <input
            key={f}
            placeholder={placeholders?.[f] || `e.g. ${f}`}
            value={values[f] || ""}
            onChange={e => handleChange(f, e.target.value)}
          />
        ))}
      </div>
    </div>
  );
}