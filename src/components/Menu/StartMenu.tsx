import { menuItems } from '@/constant/Menu'; 
import { Coffee } from 'lucide-react';
import Heading from '../Heading/Heading';
import Image from 'next/image';
export default function StarterMenu() {
  return (
    <section className="w-full mx-auto mt-[120px] px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="container mx-auto py-16 flex flex-col md:flex-row gap-12">
        <div className="w-full mb-8 md:mb-0 flex justify-center">
          <Image
            src="/menu.png"
            alt="Starter dish"
            width={448}
            height={626}
            className="w-[70%] sm:w-[60%] md:w-[50%] lg:w-[448px] h-auto max-w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 md:pl-8">
          <div className="flex flex-col mb-8">
            <Coffee className="ml-2 text-[#FF9F0D]" size={24} />
            <Heading text="Starter Menu" />
          </div>
          <div className="space-y-8">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-xl sm:text-2xl font-bold ${item.highlight ? 'text-[#FF9F0D]' : 'text-gray-800'}`}>
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
      </div>
    </section>
  );
}