import React from 'react'
import Image from 'next/image'

const FoodCategory = () => {
  const items = [
    { id: 1, img: "/Home-section/food1.png", label: "Save 50% on Fast Food" },
    { id: 2, img: "/Home-section/food2.png", label: "Delicious Burgers" },
    { id: 3, img: "/Home-section/food3.png", label: "Healthy Salads" },
    { id: 4, img: "/Home-section/food4.png", label: "Desserts" },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-orange-500">Ch</span>oose Food Item
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 hover:cursor-pointer">
          {items.map((item) => (
            <div key={item.id} className="relative">
              <Image
                src={item.img}
                alt={item.label}
                width={500}
                height={500}
                className="w-full h-56 object-cover rounded-lg"
              />

              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-md">
                <span className="text-orange-500 font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 py-10 mt-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-white order-1 md:order-2">
              <p className="text-[#FF9F0D] text-lg mb-2 font-semibold">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-[#FF9F0D]">Ex</span>tra Ordinary Taste <br />
                And Experienced
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad placeat quae
                facilis vitae, deserunt aspernatur doloremque expedita? Illo, esse
                accusamus.
              </p>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center justify-center bg-[#FF9F0D] p-1 rounded-full">
                  <Image
                    src="/Home-section/Hamburger.png"
                    alt="Hamburger"
                    width={40}
                    height={40}
                    className="mx-auto mb-2"
                  />
                  <p>Fast Food</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-[#FF9F0D] p-1 rounded-full">
                  <Image
                    src="/Home-section/cookie.png"
                    alt="Cookie"
                    width={40}
                    height={40}
                    className="mx-auto mb-2"
                  />
                  <p>Lunch</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-[#FF9F0D] p-1 rounded-full">
                  <Image
                    src="/Home-section/winee.png"
                    alt="Wine"
                    width={40}
                    height={40}
                    className="mx-auto mb-2"
                  />
                  <p>Dinner</p>
                </div>
              </div>

              <div className="mt-6">
                <Image
                  src="/Home-section/experience.png"
                  alt="Experience"
                  width={374}
                  height={93}
                  className="w-[200px] md:w-[300px] lg:w-[374px] mx-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:w-1/2 order-2 md:order-1">
              <div className="flex gap-4">
                <Image
                  src="/Home-section/about1.png"
                  alt="lacoste"
                  width={160}
                  height={120}
                  className="w-full h-[120px] object-cover rounded-lg"
                />
                <Image
                  src="/Home-section/burger.png"
                  alt="burger"
                  width={160}
                  height={120}
                  className="w-full h-[120px] object-cover rounded-lg"
                />
              </div>

              <div className="flex gap-4">
                <Image
                  src="/Home-section/burger2.png"
                  alt="burger2"
                  width={160}
                  height={120}
                  className="w-full h-[120px] object-cover rounded-lg"
                />
                <Image
                  src="/Home-section/about4.png"
                  alt="nuggets"
                  width={160}
                  height={120}
                  className="w-full h-[120px] object-cover rounded-lg"
                />
              </div>

              <div className="flex gap-4">
                <Image
                  src="/Home-section/burger3.png"
                  alt="burger3"
                  width={160}
                  height={120}
                  className="w-full h-[120px] object-cover rounded-lg"
                />
                <Image
                  src="/Home-section/salad.png"
                  alt="salad"
                  width={160}
                  height={120}
                  className="w-full h-[120px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-10 mt-40">
          <div className="mb-8">
            <p className="text-[#FF9F0D] text-lg font-semibold">Chefs</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-[#FF9F0D]">Me</span>et Our Chef
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 hover:cursor-pointer">
            <Image
              src="/Home-section/chef1.png"
              alt="Chef 1"
              height={391}
              width={312}
              className="w-64 sm:w-72 md:w-80 lg:w-72 h-[391px] object-cover"
            />
            <Image
              src="/Home-section/chef2.png"
              alt="Chef 2"
              height={391}
              width={312}
              className="w-64 sm:w-72 md:w-80 lg:w-72 h-[391px] object-cover"
            />
            <Image
              src="/Home-section/chef3.png"
              alt="Chef 3"
              height={391}
              width={312}
              className="w-64 sm:w-72 md:w-80 lg:w-72 h-[391px] object-cover"
            />
            <Image
              src="/Home-section/chef4.png"
              alt="Chef 4"
              height={391}
              width={312}
              className="w-64 sm:w-72 md:w-80 lg:w-72 h-[391px] object-cover"
            />
          </div>
        </div>

        <div className="mt-40 relative px-4">
          <div className="text-left mb-4">
            <p className="text-[#FF9F0D] text-sm md:text-base font-semibold">Testimonials</p>
            <h2 className="text-2xl md:text-3xl font-bold">What our clients are saying</h2>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-4xl bg-white">
              <Image
                src="/Home-section/client.png"
                alt="client review"
                height={350}
                width={500}
                className="w-full h-auto max-w-[500px] mx-auto" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default FoodCategory
