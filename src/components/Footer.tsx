import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">Discoveries/Discipline</h3>
          <ul className="space-y-2">
            {['Entertainment/History', 'Games & Book/Sports'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;