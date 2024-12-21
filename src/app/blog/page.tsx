import { FaTwitter, FaYoutube, FaPinterest, FaInstagram, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';
import Hero from './Hero';

const BlogPage = () => {
  const blogPosts = [
    {
      imageSrc: "/Blog-section/Lacoste.png",
      title: "10 Reasons To Do A Digital Detox Challenge",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
      imageSrc: "/Blog-section/Pizza.png",
      title: "Traditional Soft Pretzels with Sweet Beer Cheese",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
      imageSrc: "/Blog-section/Egg-curry.png",
      title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
      imageSrc: "/Blog-section/Pizza-toast.png",
      title: "My Favorite Easy Black Pizza Toast Recipe",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
  ];

  const filterMenu = [
    { name: "Chicken Fry", count: 26, imageSrc: "/Blog-section/Chicken-fry.png" },
    { name: "Burger Food", count: 46, imageSrc: "/Blog-section/Burger-food.png" },
    { name: "Pizza", count: 16, imageSrc: "/Blog-section/Pizza2.png" },
    { name: "Fresh Fruits", count: 36, imageSrc: "/Blog-section/Fresh-fruits.png" },
    { name: "Vegetables", count: 16, imageSrc: "/Blog-section/Vegetables.png" },
  ];

  return (
    <div className="flex flex-col w-full">
      <Hero />

      <div className="flex w-full mt-6 justify-center">
        <div className="flex w-full max-w-screen-lg flex-col sm:flex-row justify-between gap-6">
          <div className="w-full sm:w-2/3 p-4">
            {blogPosts.map((post, index) => (
              <div key={index} className="blog-post mb-6">
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  height={520}
                  width={871}
                  className="object-cover"
                />
                <div className="flex items-center mt-2">
                  <Image
                    src="/Blog-section/Calendar.png"
                    alt="Calendar"
                    height={24}
                    width={23}
                  />
                  <Image
                    src="/Blog-section/Admin.png"
                    alt="Admin"
                    height={24}
                    width={190}
                    className="ml-2"
                  />
                </div>
                <h5 className="font-bold mt-2">{post.title}</h5>
                <p className="text-[#4F4F4F] font-normal text-sm mt-1">{post.description}</p>
                <button className="text-[#FF9F0D] border mt-4 py-2 px-4">
                  Read More
                </button>
              </div>
            ))}

            <div>
              <Image
                src="/Blog-section/pagination.png"
                alt="Pagination"
                height={51}
                width={250}
              />
            </div>
          </div>

          <div className="w-full sm:w-1/3 p-4">
            <div className="w-full max-w-sm space-y-4">
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
              </div>;

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
      </div>
    </div>
  );
};

export default BlogPage;