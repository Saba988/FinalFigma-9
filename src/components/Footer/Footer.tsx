import { Clock, Facebook, Twitter, Instagram, Youtube, PinIcon } from 'lucide-react';
import Image from 'next/image';
export default function Footer() {
  const usefulLinks = ['About', 'News', 'Partners', 'Team', 'Menu', 'Contact'];
  const helpLinks = ['FAQ', 'Term & Condition', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'];
  const socialIcons = [
    { Icon: Facebook, url: 'https://facebook.com', color: 'text-[#1E1E1E]' },
    { Icon: Twitter, url: 'https://twitter.com', color: 'text-[#1E1E1E]' },
    { Icon: Instagram, url: 'https://instagram.com', color: 'text-[#1E1E1E]' },
    { Icon: Youtube, url: 'https://youtube.com', color: 'text-[#FF9F0D]' },
    { Icon: PinIcon, url: 'https://linkedin.com', color: 'text-[#1E1E1E]' },
  ];
  const posts = [
    { title: 'Is fastfood good for your body?', date: 'February 28, 2022', image: '/Blog-details/Wings.png' },
    { title: 'Change your food habit With organic food', date: 'February 28, 2022', image: '/Blog-details/Wings.png' },
    { title: 'Do you like fastfood for your life?', date: 'February 28, 2022', image: '/Blog-details/Wings.png' },
  ];

  return (
    <div className="bg-black p-8 md:p-12 lg:p-16 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div className="w-full">
          <h3 className="text-xl font-bold mb-4 text-white">About Us</h3>
          <p className="text-sm mb-4 text-white">
            Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the world.
          </p>
          <div className="flex items-start">
            <div className="bg-[#FF9F0D] p-2 rounded mr-4 w-[77.23px] h-[70.79px]">
              <Clock className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Opening Hours</h4>
              <p className="text-sm text-white">Mon - Sat(8.00 - 6.00)</p>
              <p className="text-sm text-white">Sunday - Closed</p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-2 flex flex-col lg:flex-row justify-between items-center text-center md:text-left md:items-start">
          <div className="mb-8 lg:mb-0">
            <h3 className="text-xl font-bold mb-4 text-white">Useful Links</h3>
            <ul className="text-sm space-y-2">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white hover:text-[#FF9F0D] transition duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Help?</h3>
            <ul className="text-sm space-y-2">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white hover:text-[#FF9F0D] transition duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-xl font-bold mb-4 text-white">Recent Posts</h3>
          {posts.map((post, index) => (
            <div key={index} className="flex items-center mb-4">
              <Image src={post.image} alt="" width={16} height={16} className="w-16 h-16 object-cover mr-4" />
              <div>
                <h4 className="font-semibold mb-1 text-sm text-white">{post.title}</h4>
                <p className="text-xs text-gray-400">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center space-x-4">
        {socialIcons.map(({ Icon, url, color }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-white p-2 rounded ${color} hover:bg-[#FF9F0D] hover:text-white transition duration-300`}
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  );
}