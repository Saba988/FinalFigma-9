import React from 'react';
import Image from 'next/image';
import { Coffee } from 'lucide-react';
import Heading from '@/components/Heading/Heading';
import { menuItems } from '@/constant/Menu';
import { MainCoursItem } from '@/constant/MainCourse';
import { DrinksItem } from "../../constant/Drink";
import { ExperienceItem } from '@/constant/Experience'; 
import Hero from '@/components/HeroSection/Hero';

export default function Menu() {
  return (
    <>
      <Hero />
      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <section className="w-full mx-auto mt-16 lg:mt-32">
          <div className="container mx-auto py-16 flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 lg:pl-8">
              <div className="flex flex-col mb-8">
                <Coffee className="ml-2 text-[#FF9F0D]" size={24} />
                <Heading text="Main Course" />
              </div>
              <div className="space-y-8">
                {MainCoursItem.map((item, index) => (
                  <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3
                        className={`text-xl sm:text-2xl font-bold ${item.highlight ? 'text-[#FF9F0D]' : 'text-gray-800'}`}
                      >
                        {item.name}
                      </h3>
                      <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">{item.price}$</span>
                    </div>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-sm sm:text-[16px] text-gray-500">{item.calories} CAL</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[448px] mb-8 lg:mb-0">
              <Image
                src="/Menu-section/mainCourse.png"
                alt="Main Course Dish"
                width={448}
                height={626}
                className="w-full h-auto max-w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="w-full mx-auto mt-16 lg:mt-32">
          <div className="container mx-auto py-10 sm:py-16 flex flex-col md:flex-row gap-8 md:gap-[112px]">
            <div className="w-full md:w-[448px] mb-6 md:mb-0">
              <Image
                src="/Menu-section/dessert.png"
                alt="Dessert dish"
                width={448}
                height={626}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="flex items-center mb-6">
                <Coffee className="text-[#FF9F0D]" size={24} />
                <Heading text="Dessert" />
              </div>
              <div className="space-y-8">
                {menuItems.map((item, index) => (
                  <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{item.name}</h3>
                      <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">{item.price}$</span>
                    </div>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-sm sm:text-[16px] text-gray-500">{item.calories} CAL</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full mx-auto mt-16 lg:mt-32">
          <div className="container mx-auto py-10 sm:py-16 flex flex-col md:flex-row gap-8 md:gap-[112px]">
            <div className="md:w-1/2 md:pl-8">
              <div className="flex items-center mb-6">
                <Coffee className="text-[#FF9F0D]" size={24} />
                <Heading text="Drinks" />
              </div>
              <div className="space-y-8">
                {DrinksItem.map((item, index) => (
                  <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3
                        className={`text-lg sm:text-2xl font-bold ${item.highlight ? 'text-[#FF9F0D]' : 'text-gray-800'}`}
                      >
                        {item.name}
                      </h3>
                      <span className="text-lg sm:text-2xl font-bold text-[#FF9F0D]">{item.price}$</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">{item.description}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{item.calories} CAL</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-[448px] mb-6 md:mb-0">
              <Image
                src="/Menu-section/drinks.png"
                alt="Drinks image"
                width={448}
                height={626}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="relative py-10 sm:py-16 lg:py-20 bg-cover bg-center bg-[url('/menu.png')]">
          <div className="absolute inset-0 bg-black bg-opacity-85"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-between items-center text-center">
              {ExperienceItem.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 sm:mb-10 lg:mb-12 flex flex-col justify-center items-center"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={120}
                    height={120}
                    className="mb-6 sm:mb-8 lg:mb-10"
                  />
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-5 lg:mb-6">
                    {item.value}
                  </h3>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}