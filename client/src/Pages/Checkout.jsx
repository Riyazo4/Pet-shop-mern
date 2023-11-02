import React from "react";

import test from "../assets/8ce53529-21ab-44ea-8422-0259ceb700b4-1FriSyPl33ilsVe8kp_jcc-tyDm31DcFU.jpeg";

import { MdArrowBackIosNew } from "react-icons/md";
import paymenticons from "../assets/icons/payment_icons (6) (1).jpg"

const Checkout = () => {
  return (
    <div>
      <section>
        <div className="flex justify-between   m-16">
          <div>
            <div>
              <form action="">
                <div className="flex gap-3 mb-5">
                  <input
                    type="text"
                    className="p-1  text-gray-500
                       bg-white border
                     rounded-md shadow-sm outline-none appearance-none
                    focus:border-orange-500
          font-bold"
                    placeholder="First Name"
                  />

                  <input
                    type="text"
                    className="p-1  text-gray-500
                       bg-white border
                     rounded-md shadow-sm outline-none appearance-none
                    focus:border-orange-500
          font-bold"
                    placeholder="Last Name"
                  />
                </div>

                <div className="mb-5">
                  <input
                    type="email"
                    className="p-1  text-gray-500
                       bg-white border
                     rounded-md shadow-sm outline-none appearance-none
                    focus:border-orange-500
          font-bold w-full"
                    placeholder="Email"
                  />
                </div>

                <div className="mb-5 w-full">
                  <input
                    type="number"
                    className="p-1  text-gray-500
                       bg-white border
                     rounded-md shadow-sm outline-none appearance-none
                    focus:border-orange-500
          font-bold w-full"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="mb-5 w-full">
                  <input
                    type="number"
                    className="p-1  text-gray-500
                       bg-white border
                     rounded-md shadow-sm outline-none appearance-none
                    focus:border-orange-500
          font-bold w-full"
                    placeholder="Address"
                  />
                </div>

                <div className="mb-5 w-full">
                  <input
                    type="number"
                    className="p-1  text-gray-500
                       bg-white border
                     rounded-md shadow-sm outline-none appearance-none
                    focus:border-orange-500
          font-bold w-full"
                    placeholder="Land Mark"
                  />
                </div>

                <div className="flex justify-between ">
                  <input
                    type="text"
                    className="p-1 w-44 text-gray-500
                       bg-white border
                     rounded-md shadow-sm outline-none appearance-none
                    focus:border-orange-500
          font-bold"
                    placeholder="City"
                  />

                  <input
                    type="text"
                    className="p-1  text-gray-500
                       bg-white border
                     rounded-md shadow-sm outline-none appearance-none
                    focus:border-orange-500
          font-bold w-44"
                    placeholder="State"
                  />

                  <input
                    type="text"
                    className="p-1  text-gray-500
                       bg-white border
                     rounded-md shadow-sm outline-none appearance-none
                    focus:border-orange-500
                     font-bold w-44"
                    placeholder="Pin code"
                  />
                </div>
              </form>
            </div>

            <div className="flex justify-between mt-10 mb-14">
              <div className="flex items-center cursor-pointer">
                <MdArrowBackIosNew />

                <p>Return</p>
              </div>

              <button className="bg-black shadow-xl hover:bg-black p-12 rounded-lg font-semibold hover.bg-indigo-600 py-3 text-sm text-white uppercase">
                Checkout
              </button>
            </div>

            <div className="cursor-pointer ">
                <img className="" src={paymenticons} alt="" />
            </div>


          </div>



          <div>
            <div className="flex items-center gap-10 mb-7">
              <div>
                <img src={test} className="w-16" alt="" />
              </div>
              <p>Pedigree Dof Dood 1 Kg Puppy</p>

              <p>1290</p>
            </div>

            <div className="flex items-center gap-10 mb-7">
              <div>
                <img src={test} className="w-16" alt="" />
              </div>
              <p>Pedigree Dof Dood 1 Kg Puppy</p>

              <p>1290</p>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
};

export default Checkout;

// "bg-blue-50 text-black p-5 rounded-lg




// <div>
// <div>
//   <p>subtotal</p>
//   <p>56900</p>
// </div>
// <hr />

// <div>
// <h2>Total</h2>

// <h1>2544</h1>
// </div>
// </div>