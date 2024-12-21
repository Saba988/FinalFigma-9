import React from 'react'
import Hero from './Hero'
import Image from 'next/image';

function Checkout() {
  return (
    <>
      <Hero />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex justify-center items-center mt-10">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
            <p className="text-[#373F50] font-bold text-lg mb-4">Shipping Address</p>
            <form className="space-y-4">
              <div>
                <label htmlFor="Fname" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="Fname"
                  id="Fname"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="Company" className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  name="Company"
                  id="Company"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="City" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  name="City"
                  id="City"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="Address1" className="block text-sm font-medium text-gray-700">Address 1</label>
                <input
                  type="text"
                  name="Address1"
                  id="Address1"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                />
              </div>
            </form>

            <p className="text-[#333333] font-medium mt-6">Billing Address</p>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="billingAddress"
                className="mr-2 w-4 h-4 text-[#FF9F0D] focus:ring-2 focus:ring-[#FF9F0D] border-gray-300 rounded"
              />
              <label htmlFor="billingAddress" className="text-sm text-gray-700">Same as shipping address</label>
            </div>

            <div className="flex justify-between items-center mt-6">
              <button className="text-white bg-[#FF9F0D] px-6 py-3 rounded-md hover:bg-[#e68d00]">
                Back to cart
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
            <form className="space-y-4">
              <div>
                <label htmlFor="Lname" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="Lname"
                  id="Lname"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="Number" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="number"
                  name="Number"
                  id="Number"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="Zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
                <input
                  type="number"
                  name="Zip"
                  id="Zip"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="Country" className="block text-sm font-medium text-gray-700">Country</label>
                <select
                  name="Country"
                  id="Country"
                  defaultValue=""
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                >
                  <option value="" disabled>Select your country</option>
                  <option value="PAK">Pakistan</option>
                  <option value="Canada">Canada</option>
                  <option value="USA">United States</option>
                  <option value="India">India</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>

              <div>
                <label htmlFor="Address2" className="block text-sm font-medium text-gray-700">Address 2</label>
                <input
                  type="text"
                  name="Address2"
                  id="Address2"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-transparent"
                />
              </div>
            </form>

            <button className="mt-6 w-full text-white bg-[#FF9F0D] px-6 py-3 rounded-md hover:bg-[#e68d00]">
              Proceed to shipping
            </button>
          </div>
        </div>

        <div className='border rounded-[6px] bg-white mt-10'>
          <div className="space-y-6 ml-10 mt-8">
            <div className="flex items-center space-x-4">
              <Image src="/Checkout/Chicken-tikka.png" alt="Chicken Tikka" height={20} width={60} />
              <div>
                <p className='text-[#333333] font-bold'>Chicken Tikka Kabab</p>
                <p className='text-[#4F4F4F] font-normal'>150 gm net</p>
                <p className='text-[#4F4F4F] font-normal'>50$</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Image src="/Checkout/Chicken-tikka.png" alt="Chicken Tikka" height={20} width={60} />
              <div>
                <p className='text-[#333333] font-bold'>Chicken Tikka Kabab</p>
                <p className='text-[#4F4F4F] font-normal'>150 gm net</p>
                <p className='text-[#4F4F4F] font-normal'>50$</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Image src="/Checkout/Chicken-tikka.png" alt="Chicken Tikka" height={20} width={60} />
              <div>
                <p className='text-[#333333] font-bold'>Chicken Tikka Kabab</p>
                <p className='text-[#4F4F4F] font-normal'>150 gm net</p>
                <p className='text-[#4F4F4F] font-normal'>50$</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-10 ml-10 mr-10">
            <p className='text-[#4F4F4F] font-normal flex justify-between'>
              Sub-total <span>130$</span>
            </p>
            <p className='text-[#4F4F4F] font-normal flex justify-between'>
              Shipping <span>Free</span>
            </p>
            <p className='text-[#4F4F4F] font-normal flex justify-between'>
              Discount <span>25%</span>
            </p>
            <p className='text-[#4F4F4F] font-normal flex justify-between'>
              Tax <span>54.76$</span>
            </p>
            <br />
            <p className='text-[#4F4F4F] font-normal flex justify-between'>
              Total <span>432.65$</span>
            </p>
            <button className='text-white bg-[#FF9F0D] px-6 py-3 rounded-md'>
              Place an order
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Checkout;