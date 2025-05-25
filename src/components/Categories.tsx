import React from 'react';

const Categories = () => {
  const categories = ['Casual Wear', 'Elegant Dresses', 'Worthwear', 'Sassown Trends'];

  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-bold mb-8 text-center">CASUAL WEAR</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {categories.map((category) => (
          <div key={category} className="bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="font-medium mb-2">{category}</h3>
            <button className="text-sm underline">SHOP NOW</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;