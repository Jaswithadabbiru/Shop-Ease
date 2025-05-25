import React from 'react';
const Trends = () => {
  const trends = [
    'Seal Verm', 'Shad Isotide', 'Mixed Yever',
    'Saloo Fates', 'Safe Rugs', 'Score Ode'
  ];

  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-bold mb-8 text-center">CUSTOMER TRENDS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {trends.map((trend) => (
          <div key={trend} className="border p-4 rounded-lg">
            <h3 className="font-medium mb-2">{trend}</h3>
            <p className="text-sm text-gray-500">Sweetness/Experience</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Trends;