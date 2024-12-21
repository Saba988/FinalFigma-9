"use client"
import Image from "next/image";
import { useState } from "react";
import Hero from "./Hero";

const Shop = () => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <>
      <Hero />
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 mt-32">
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="flex flex-col">
            <div className="relative">
              <Image
                className="rounded-[6px] h-[300px] sm:h-[400px] hover:cursor-pointer"
                src="/Shop-section/Rectangle 8883.png"
                alt="Shop list 1"
                height={300}
                width={400}
              />
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-[#FF9F0D] text-white text-[12px] font-normal px-2 py-1 rounded-[6px]">
                In stock
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <Image
                className="rounded-[6px] hover:cursor-pointer"
                src="/Shop-section/Rectangle 8884.png"
                alt="Thumb 1"
                height={80}
                width={80}
              />
              <Image
                className="rounded-[6px] hover:cursor-pointer"
                src="/Shop-section/Rectangle 8885.png"
                alt="Thumb 2"
                height={80}
                width={80}
              />
              <Image
                className="rounded-[6px] hover:cursor-pointer"
                src="/Shop-section/Rectangle 8886.png"
                alt="Thumb 3"
                height={80}
                width={80}
              />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-[35px] font-bold">Yummy Chicken Chup</h2>
            <p className="text-gray-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eaque quos quidem deserunt.
            </p>

            <h4 className="text-[28px] font-bold mt-4">$54.00</h4>

            <div className="flex items-center mt-2">
              <Image src="/Shop-section/Star.png" alt="rating" height={20} width={100} />
              <span className="ml-2 text-gray-500 text-sm">5.0 Rating | 22 Reviews</span>
            </div>

            <div className="flex gap-4 mt-6">
              <button className="bg-[#FF9F0D] text-white px-6 py-2 rounded-lg hover:bg-[#e67e22]">
                + Add to Cart
              </button>
              <button className="bg-gray-300 text-black px-6 py-2 rounded-lg hover:bg-gray-400">
                Remove
              </button>
            </div>

            <p className="text-gray-500 mt-4">Category: <span className="font-bold">Pizza</span></p>
            <p className="text-gray-500">Tag: <span className="font-bold">Our Shop</span></p>

            <div className="flex gap-2 mt-4">
              <Image src="/Shop-section/Facebook.png" alt="Share" height={24} width={24} />
              <Image src="/Shop-section/Instagram.png" alt="Share" height={24} width={24} />
              <Image src="/Shop-section/Twitter.png" alt="Share" height={24} width={24} />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t">
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setActiveTab("Description")}
              className={`px-4 py-2 ${activeTab === "Description" ? "border-b-2 border-[#FF9F0D] font-bold" : "text-gray-500"
                }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("Reviews")}
              className={`px-4 py-2 ${activeTab === "Reviews" ? "border-b-2 border-[#FF9F0D] font-bold" : "text-gray-500"
                }`}
            >
              Reviews (24)
            </button>
          </div>

          <div className="mt-4 text-gray-600">
            {activeTab === "Description" && (
              <>
                <p>
                  Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu
                  euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus
                  bibendum.
                </p>
                <ul className="mt-4 list-disc pl-6">
                  <li>Key benefit 1</li>
                  <li>Key benefit 2</li>
                  <li>Key benefit 3</li>
                </ul>
              </>
            )}
            {activeTab === "Reviews" && <p>Customer reviews will be displayed here.</p>}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-[28px] font-bold">Similar Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 justify-items-center cursor-pointer">
            {[
              { name: "Fresh Lime", price: "$22.00", image: "/Shop-section/Fresh-lime.png" },
              { name: "Chocolate Muffin", price: "$18.00", image: "/Shop-section/Muffin.png" },
              { name: "Burger", price: "$35.00", image: "/Shop-section/Burger.png" },
              { name: "Cheese Butter", price: "$22.00", image: "/Shop-section/Cheese-butter.png" },
              { name: "Country Burger", price: "$30.00", image: "/Shop-section/Country-burger.png" },
              { name: "Drinks", price: "$20.00", image: "/Shop-section/Drinks.png.png" },
              { name: "Pizza", price: "$35.00", image: "/Shop-section/Pizza.png.png" },
              { name: "Sandwiches", price: "$18.00", image: "/Shop-section/Sandwitches.png" },
              { name: "Chicken Chup", price: "$25.00", image: "/Shop-section/Chicken-chup.png" },
            ].map((product, index) => (
              <div
                key={index}
                className="text-center w-full sm:w-auto"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  height={200}
                  width={300}
                  className="object-cover w-full"
                />
                <p className="mt-2">{product.name}</p>
                <p className="font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default Shop;