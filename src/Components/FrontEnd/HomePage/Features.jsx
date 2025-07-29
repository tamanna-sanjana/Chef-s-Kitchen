import React from 'react';

import { FaUtensils, FaFireAlt, FaUserTie, FaHamburger } from 'react-icons/fa';
import { NavLink } from 'react-router';

const features = [
  {
    icon: <FaUtensils className="text-4xl text-amber-600" />,
    title: 'Menu variations',
    desc: 'Explore a wide range of delicious dishes crafted to suit every taste and preference.',
  },
  {
    icon: <FaFireAlt className="text-4xl text-amber-600" />,
    title: 'Cooking warm',
    desc: 'Experience freshly cooked meals served hot to preserve taste and nutrition.',
  },
  {
    icon: <FaUserTie className="text-4xl text-amber-600" />,
    title: 'Best chef',
    desc: 'Our top-rated chefs bring expertise and passion to every plate they create.',
  },
  {
    icon: <FaHamburger className="text-4xl text-amber-600" />,
    title: 'Fast food',
    desc: 'Quick, tasty, and satisfying meals prepared for those on the go.',
  },
];


const Features = () => {
     return (
          <>

          <section className="bg-black text-white py-16 px-4">
      <div className="text-center mb-12">
        <p className="text-amber-600 tracking-widest uppercase text-lg">F e a t u r e s</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
          Get a many of interesting <br className="hidden sm:block" /> features.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto shadow-2xl border-b-gray-700">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-950 to-gray-700 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-amber-700 transition-shadow duration-300"
          >
            <div className="bg-white rounded-full p-5 mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{feature.desc}</p>
            <NavLink to="/" className="text-amber-700 hover:underline flex items-center gap-1">
              Learn More <span>&rarr;</span>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
               
          </>
     );
};

export default Features;