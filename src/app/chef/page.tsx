import React from 'react';
import Hero from './Hero';
import Image from 'next/image';

const Chefs = () => {
  const chefs = [
    { id: 1, src: '/Chef-section/chef1.png', name: 'Tahmina Rumi', role: 'Chef' },
    { id: 2, src: '/Chef-section/chef2.png', name: 'Jorina Begum', role: 'Chef' },
    { id: 3, src: '/Chef-section/chef3.png', name: 'M.Mohammad', role: 'Chef' },
    { id: 4, src: '/Chef-section/chef4.png', name: 'Munna Kathy', role: 'Chef' },
    { id: 5, src: '/Chef-section/chef5.png', name: 'Tahmina Rumi', role: 'Chef' },
    { id: 6, src: '/Chef-section/chef6.png', name: 'Bisnu devgon', role: 'Chef' },
    { id: 7, src: '/Chef-section/chef7.png', name: 'Motin Molladsf', role: 'Chef' },
    { id: 8, src: '/Chef-section/chef8.png', name: 'William Rumi', role: 'Chef' },
    { id: 9, src: '/Chef-section/chef9.png', name: 'Kets william roy', role: 'Chef' },
    { id: 10, src: '/Chef-section/chef10.png', name: 'Mahmud kholil', role: 'Chef' },
    { id: 11, src: '/Chef-section/chef11.png', name: 'Ataur Rahman', role: 'Chef' },
    { id: 12, src: '/Chef-section/chef12.png', name: 'Monalisa holly', role: 'Chef' },
  ];

  return (
    <div>
      <Hero />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 mt-24">
        {chefs.map((chef) => (
          <div key={chef.id} className="text-center">
            <div className="relative w-[312px] h-[379px] mx-auto overflow-hidden rounded-lg">
              <Image
                src={chef.src}
                alt={chef.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h6 className="text-[#333333] font-bold mt-4">{chef.name}</h6>
            <p className="text-[#333333] font-normal">{chef.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chefs;