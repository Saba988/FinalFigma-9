import React from 'react';
import Hero from "./Hero";
import Image from 'next/image';
import { FaTwitter, FaPinterest, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';

const Pages = () => {

  const filterMenu = [
    { name: "Chicken Fry", count: 26, imageSrc: "/Blog-section/Chicken-fry.png" },
    { name: "Burger Food", count: 46, imageSrc: "/Blog-section/Burger-food.png" },
    { name: "Pizza", count: 16, imageSrc: "/Blog-section/Pizza2.png" },
    { name: "Fresh Fruits", count: 36, imageSrc: "/Blog-section/Fresh-fruits.png" },
    { name: "Vegetables", count: 16, imageSrc: "/Blog-section/Vegetables.png" },
  ];

  return (
    <>
      <Hero />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 py-4 mx-auto max-w-7xl">
        {/* Left Side Content */}
        <div className="col-span-1 lg:col-span-2 mt-16 mb-6">
          <div className="mb-6">
            <Image src="/Blog-details/Wings.png" alt="Chicken Wings" height={300} width={450} />
            <div className="flex items-center mt-4">
              <Image src="/Blog-section/Calendar.png" alt="Calendar" height={18} width={18} />
              <Image src="/Blog-section/Admin.png" alt="Admin" height={18} width={170} className="ml-2" />
            </div>
          </div>

          <div className="mb-6 text-center sm:text-left">
            <h5 className="font-bold text-xl">
              10 Reasons To Do A Digital Detox Challenge
            </h5>

            <p className="text-gray-600 mt-8 text-sm mb-3 w-full md:w-4/5">
              Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti ac orci...
            </p>

            <p className="text-gray-600 text-sm mb-3 w-full md:w-4/5">
              Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum...
            </p>
          </div>

          <div className="bg-[#FF9F0D] w-full text-justify sm:w-[80%] md:w-[70%] h-[120px] mb-6 flex items-center justify-center px-4 sm:px-0">
            <Image src="/Blog-details/Quotes.png" alt="Quotes" height={30} width={30} className="mr-4" />
            <h5 className="font-bold text-white text-base w-full md:w-4/5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </h5>
          </div>

          <div className="mb-6">
            <p className="text-gray-600 text-sm w-full md:w-4/5 mb-3 text-center sm:text-left">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
          </div>

          <div className="mb-6 text-center sm:text-left">
            <p className="text-gray-600 text-sm w-full md:w-4/5 mb-3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>

            <div className="flex justify-center w-full sm:w-auto">
              <Image src="/Blog-details/Egg-curry.png" alt="Egg Curry" height={200} width={200} />
            </div>

            <p className="text-gray-600 mt-4 text-sm w-full md:w-4/5 mb-3 text-center sm:text-left">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            </p>
          </div>

          <div className="flex border mt-12 bg-white mb-6 items-start flex-col md:flex-row lg:w-[80%] xl:w-[70%] pl-4">
            <p className="font-bold text-sm w-full md:w-4/5">
              Tags:
              <span className="text-[#828282] space-x-3 ml-1 sm:flex-nowrap">
                <span className="mb-1">Restaurant</span>
                <span className="mb-1">Dinner</span>
                <span className="mb-1">Pizza</span>
                <span className="mb-1">Yummy</span>
              </span>
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="font-bold text-sm mr-4">Share:</span>
              <div className="flex gap-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={20} className="text-blue-500" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={20} className="text-pink-600" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={20} className="text-blue-600" />
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                  <FaPinterest size={20} className="text-red-600" />
                </a>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-bold text-[#333333] text-lg w-full md:w-4/5 mt-14 text-center md:text-left">Comments - 03</h4>
            <Image className="mt-8" src="/Blog-details/Comment1.png" alt="Comment" height={100} width={650} />
            <Image className="mt-8" src="/Blog-details/Comment2.png" alt="Comment" height={100} width={650} />
            <Image className="mt-8" src="/Blog-details/Comment3.png" alt="Comment" height={100} width={650} />
          </div>

          <div className="mb-6 ml-[-5px]">
            <h5 className="font-bold text-[#333333] text-base w-full mt-14">Post a comment</h5>
            <div className="border mt-6 bg-white mb-3 max-w-full lg:max-w-[70%] mx-auto ml-12">
              <form className="flex gap-3 ml-5 mr-5 mt-8 flex-row">
                <input
                  type="text"
                  name="text"
                  placeholder="Name"
                  className="w-2/5 p-2 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-2/5 p-2 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </form>
              <textarea
                placeholder="Write a comment"
                className="w-4/5 p-2 ml-5 border-2 border-gray-300 focus:outline-none focus:border-blue-500 mt-4"
                rows={6}
              />
            </div>
          </div>

          <div className="mb-16 mt-6">
            <button className="bg-[#ffbf00] text-white px-6 py-2 rounded-lg">Post Comment</button>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="col-span-1 lg:col-span-1">
          <div className="top-10 mt-16 mb-8">
            <div className="w-full max-w-sm space-y-4 mb-8">
              <div>
                <Image
                  src="/Blog-section/Search.png"
                  alt="Search bar"
                  height={51}
                  width={250}
                />
              </div>

              <div className="border-white border-2 bg-slate-100 p-4 flex flex-col items-center">
                <Image
                  src="/Blog-section/Prince-miyako.png"
                  alt="Prince Miyako"
                  height={29}
                  width={125}
                />
                <h6 className="font-bold mt-2 text-center">Prince Miyako</h6>
                <p className="text-[#828282] text-center">Blogger/Photographer</p>
                <Image
                  src="/Shop-section/Star.png"
                  alt="review"
                  height={11}
                  width={87}
                />
                <span className="text-[#828282] text-center">(1 Review)</span>
                <p className="text-[#828282] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis
                  distinctio, odio eligendi suscipit reprehenderit atque
                </p>
              </div>
            </div>

            <div className="border-white border-2 bg-slate-100 p-4">
              <h6 className="text-[#333333] font-bold mb-2">Recent Post</h6>
              {["Burger", "Dessert", "Pasta", "Smoothie"].map((item, index) => (
                <div key={index} className="mb-4">
                  <Image
                    src={`/Blog-section/${item}.png`}
                    alt={item}
                    height={91}
                    width={99}
                  />
                  <p className="text-[#828282]">June 22, 2020</p>
                  <p className="text-[#4F4F4F]">
                    Lorem ipsum dolor sit cing elit, sed do.
                  </p>
                </div>
              ))}
            </div>

            <div className="border-white border-2 bg-slate-100 p-4">
              <h6 className="text-[#333333] font-bold mb-2">Filter By Menu</h6>
              <div className="space-y-3">
                {filterMenu.map((menu, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <Image
                      src={menu.imageSrc}
                      alt={menu.name}
                      height={91}
                      width={99}
                    />
                    <p className="text-[#333333]">{menu.name}</p>
                    <p className="text-[#4F4F4F]">{menu.count}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-white border-2 bg-slate-100 p-4">
              <h6 className="text-[#333333] font-bold mb-2">Popular Tags</h6>
              <div className="flex flex-wrap gap-2">
                {["Sandwich", "Tikka", "BBQ", "Resturant", "Chicken Sharma", "Health", "Fastfood", "Food", "Pizza", "Burger", "Chicken"].map((tag, index) => (
                  <p key={index} className="text-[#4F4F4F] border border-gray-300 py-1 px-3 rounded-md">
                    {tag}
                  </p>
                ))}
              </div>
            </div>

            <div className="border-white border-2 bg-slate-100 p-4">
              <h6 className="text-[#333333] font-bold mb-2">Photo Gallery</h6>
              <div className="grid grid-cols-3 gap-4">
                {["Pizza", "Burger", "Curry", "BBQ", "Nuggets", "Egg-fries"].map((item, index) => (
                  <div key={index} className="w-full aspect-square relative">
                    <Image
                      src={`/Blog-section/${item}.png`}
                      alt={item}
                      layout="fill"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="border-white border-2 bg-slate-100 p-4">
              <h6 className="text-[#333333] font-bold flex justify-center">Follow Us</h6>
              <div className="flex gap-4 justify-center">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={30} className="text-blue-500" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={30} className="text-red-500" />
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                  <FaPinterest size={30} className="text-red-600" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} className="text-pink-600" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={30} className="text-blue-600" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;