import React from 'react'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa6'
import FoodCategory from '../foodcategory/page'


function HomePage() {
  return (
    <>
      <section className='bg-black px-3 md:px-[135px] flex flex-col md:flex-row md:items-center py-[50px] mt-16'>
        <div className='text-white w-full md:w-[50%]'>
          <h1 className='text-[24px] md:text-[32px] font-normal text-[#FF9F0D] font whitespace-nowrap'>
            Its Quick & Amusing!
          </h1>

          <h1 className='text-[25px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal'>
            <span className='text-[#FF9F0D]'>Th</span>e Art of speed food Quality
          </h1>

          <p className='text-[10px] md:text-[16px] font-normal'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
          </p>

          <div className='flex flex-col md:flex-row items-center md:items-start'>
            <button className='bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800'>
              See More
            </button>
          </div>
        </div>

        <div className='mt-[50px] md:mt-0'>
          <Image
            src="/Home-section/food.png"
            alt='Hero Image'
            width={700}
            height={500}
            className='w-full max-w-[700px]'
          />
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-black px-3 md:px-[135px] flex flex-col md:flex-row md:items-start py-[50px]">
        <div className="text-white w-full md:w-[50%]">
          <h1 className="text-[24px] md:text-[32px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
            About us
          </h1>

          <h1 className="text-[20px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
            <span className="text-[#FF9F0D]">We</span> Create the best foody product
          </h1>

          <p className="text-[10px] md:text-[16px] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>

          <ul className="list-none mt-6">
            <li className="text-[10px] md:text-[16px] font-normal mt-6 flex">
              <span className="mr-[10px]">
                <FaCheck />
              </span> Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="text-[10px] md:text-[16px] font-normal mt-6 flex">
              <span className="mr-[10px]">
                <FaCheck />
              </span> Quisque diam pellentesque bibendum non dui volutpat fringilla
            </li>
            <li className="text-[10px] md:text-[16px] font-normal mt-6 flex">
              <span className="mr-[10px]">
                <FaCheck />
              </span> Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
          </ul>

          <div className="flex flex-col md:flex-row items-center md:items-start">
            <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
              See More
            </button>
          </div>
        </div>

        <div className="mt-[50px] md:mt-0 md:w-[50%] grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Image
              src="/Home-section/foodpic1.jpeg"
              alt="Food Image 1"
              width={672}
              height={400}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>

          <div className="col-span-1">
            <Image
              src="/Home-section/foodpic2.jpeg"
              alt="Food Image 2"
              width={336}
              height={200}
              className="w-full h-[200px] object-cover rounded-lg"
            />
          </div>

          <div className="col-span-1">
            <Image
              src="/Home-section/foodpic3.png"
              alt="Food Image 3"
              width={336}
              height={200}
              className="w-full h-[200px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>


      {/* Food Category Component */}
      <FoodCategory />
    </>
  )
}

export default HomePage
