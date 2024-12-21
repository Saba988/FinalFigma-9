import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";

export default function Aboutus() {
  return (
    <div>
      <section className="text-white body-font">
        <div className="container mx-auto flex flex-col-reverse md:flex-row px-5 py-12 items-center">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Image
              className="object-cover object-center"
              alt="hero"
              src="/AboutSection/About.png"
              width={250}
              height={400}
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
              About us _____
            </h1>
            <p className="text-black title-font text-2xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-6 leading-relaxed mt-6 text-[#333333] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
            <div className="flex justify-center md:justify-start flex-wrap gap-4">
              <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-sm">
                Show More
              </button>
              <button className="inline-flex text-black border-0 py-2 px-3 focus:outline-none rounded text-sm items-center">
                <IoPlayOutline className="mr-2 block" /> Watch video
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white body-font">
        <div className="container mx-auto px-5 py-12 flex flex-col items-center text-center">
          <h1 className="text-black text-2xl font-bold mt-3">Why Choose Us</h1>
          <p className="text-black mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Image
            className="mt-8 object-cover object-center"
            alt="hero"
            src="/AboutSection/aboutCenter.png"
            width={300}
            height={100}
          />
        </div>
      </section>

      <section className="text-white body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 flex flex-col items-center text-center border-2 rounded-lg">
              <Image
                src="/AboutSection/Student.png"
                width={60}
                height={60}
                alt="Best Chef Icon"
                className="mb-4"
              />
              <h1 className="text-lg font-medium text-black mb-2">BEST CHEF</h1>
              <p className="text-sm text-black leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="p-4 flex flex-col items-center text-center border-2 rounded-lg">
              <Image
                src="/AboutSection/Coffee.png"
                width={60}
                height={60}
                alt="120 Items Food Icon"
                className="mb-4"
              />
              <h1 className="text-lg font-medium text-black mb-2">120 Item Food</h1>
              <p className="text-sm text-black leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="p-4 flex flex-col items-center text-center border-2 rounded-lg">
              <Image
                src="/AboutSection/man.png"
                width={60}
                height={60}
                alt="Clean Environment Icon"
                className="mb-4"
              />
              <h1 className="text-lg font-medium text-black mb-2">
                Clean Environment
              </h1>
              <p className="text-sm text-black leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="relative w-full">
          <Image
            src="/AboutSection/Team-member.png"
            alt="Team Members"
            height={460}
            width={1920}
            className="w-full h-[250px] md:h-[400px] lg:h-[460px] object-cover"
          />

          <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full text-center px-4">
            <h2 className="font-bold text-white text-[28px] md:text-[36px] lg:text-[48px] mb-2 md:mb-4">Team Member</h2>
            <p className="font-normal text-white text-sm md:text-base lg:text-[16px] w-full md:w-[418px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
          {[
            { name: "Mark Henry", role: "Drink", img: "/AboutSection/Mark-henry.png" },
            { name: "Lucky Herem", role: "Chef", img: "/AboutSection/Lucky-herem.png" },
            { name: "Moon Henry", role: "Founder", img: "/AboutSection/Mark-henry2.png" },
            { name: "Tom Morrow", role: "Specialist", img: "/AboutSection/Tom-morrow.png" },
          ].map((member, index) => (
            <div key={index} className="text-center w-[150px] md:w-[200px]">
              <Image src={member.img} alt={member.name} height={200} width={150} className="mx-auto object-cover" />
              <h4 className="font-bold mt-2">{member.name}</h4>
              <p className="text-[#828282] text-sm">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-40 px-4">
          <div className="text-left mb-4">
            <p className="text-[#FF9F0D] text-sm md:text-base font-semibold italic">Testimonials</p>
            <h2 className="text-xl md:text-3xl font-bold">What our clients are saying</h2>
          </div>
          <div className="flex justify-center">
            <div
              className="w-full bg-white text-center shadow-lg rounded-lg 
                 p-6 md:p-10 lg:p-12 
                 max-w-xl md:max-w-3xl lg:max-w-5xl"
            >

              <div className="flex justify-center">
                <Image
                  src="/Home-Section/client.png"
                  alt="client review"
                  height={500}
                  width={500}
                  className="rounded-full mb-6 md:mb-8"
                />
              </div>
              <p className="text-[#4F4F4F] mb-6 text-sm md:text-lg lg:text-xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisque diam pellentesque elementum vitae mi sapien.
              </p>
              <h5 className="font-bold text-lg md:text-xl">Alamin Hasan</h5>
              <p className="text-[#828282] text-xs md:text-sm lg:text-base">Food Specialist</p>
              <div className="flex justify-center my-4">
                <Image src="/AboutSection/Dot.png" alt="Dot" height={20} width={60} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mt-20 px-4">
          <h2 className="font-bold text-[24px] md:text-[30px] mb-2">Our Food Menu</h2>
          <p className="text-[#4F4F4F] font-normal text-sm md:text-base w-full md:w-[418px] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
          </p>

          <ul className="flex flex-wrap justify-center gap-4 md:gap-6 cursor-pointer mb-6 mt-10">
            {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"].map((item, index) => (
              <li
                key={index}
                className={`${index === 0 ? "text-[#FF9F0D] underline underline-offset-4" : "text-[#4F4F4F]"
                  } text-sm md:text-base`}
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 border-b border-[#E0E0E0] text-left"
              >
                <div>
                  <h5 className="font-bold text-[16px] md:text-[18px]">Alder Grilled Chinook Salmon</h5>
                  <p className="text-[#4F4F4F] text-xs md:text-sm">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="text-[#828282] text-xs md:text-sm">560 CAL</p>
                </div>
                <h5 className="text-[#FF9F0D] font-bold text-[16px] md:text-[18px]">32$</h5>
              </div>
            ))}
          </div>

          <button className="text-[#FF9F0D] border-[1px] border-[#FF9F0D] px-4 md:px-6 py-2 rounded mt-6 hover:bg-[#FF9F0D] hover:text-white transition">
            View More
          </button>
        </div>
      </div>

    </div>
  )
}