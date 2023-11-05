"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-full flex-col bg-gray-200 ">
      <h1 className="mb-10 text-center">Home Page</h1>
      <div className="m-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <Link
          href="/products/shoes"
          className="cursor-pointer bg-white p-5 m-2 min-w-full h-auto"
        >
          <h2 className="text-2xl font-bold mb-2 mt-3 ">
            Up to 40% off | Shoes & handbags
          </h2>

          <div className="grid grid-cols-2 gap-2">
            <span>
              <img
                className="max-w-full h-auto"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/PCQC/phase3/Sports_low_res._SY116_CB575250117_.png"
                alt=""
              />
              <p>Sports shoes</p>
            </span>
            <span>
              <img
                className="max-w-full h-auto"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/PCQC/phase3/Men_low_res._SY116_CB575248862_.jpg"
                alt=""
              />
              <p>Men's shoes</p>
            </span>
            <span>
              <img
                className="max-w-full h-auto"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/PCQC/phase3/Heels_low_res._SY116_CB575248862_.png"
                alt=""
              />
              <p>Women's shoes</p>
            </span>
            <span>
              <img
                className="max-w-full h-auto"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/PCQC/phase3/HB_low_res._SY116_CB575250117_.png"
                alt=""
              />
              <p>Handbags</p>
            </span>
          </div>
        </Link>
        <Link
          href="/products/furniture"
          className="cursor-pointer bg-white p-5 m-2 min-w-full h-auto"
        >
          <h2 className="text-2xl font-bold mb-2 mt-3">
            Up to 70% off | Deals on Ecom Brands
          </h2>

          <div className="grid grid-cols-2 gap-2">
            <span>
              <img
                className="max-w-full h-auto"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Kitchen/HomeD_light_QuadImageCard_1x_186x116._SY116_CB575416348_.jpg"
                alt=""
              />
              <p>
                Starting ₹169 | Home
                <br />
                products
              </p>
            </span>
            <span>
              <img
                className="max-w-full h-auto"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Kitchen/QC_PC_186x116_6._SY116_CB575416718_.jpg"
                alt=""
              />
              <p>
                Starting ₹139 | Kitchen <br />
                products
              </p>
            </span>
            <span>
              <img
                className="max-w-full h-auto"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Gateway/HomeDecor_DryFruit_QuadImageCard_1x_186X116._SY116_CB575267810_.jpg"
                alt=""
              />
              <p>
                Starting ₹99 | Dry fruits, <br />
                nuts & more
              </p>
            </span>
            <span>
              <img
                className="max-w-full h-auto"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Gateway/HomeDecor_DryFruit_QuadImageCard_1x_186X116._SY116_CB575267810_.jpg"
                alt=""
              />
              <p>
                Min. 60% off | Festive
                <br /> collections{" "}
              </p>
            </span>
          </div>
        </Link>
        <Link
          href="/products/smartphone"
          className="cursor-pointer bg-white p-5 m-2 min-w-full h-auto"
        >
          <h2 className="text-2xl font-bold mb-2 mt-3 ">
            Deals on smartphones that suits your budget
          </h2>

          <div className="grid grid-cols-2 gap-2">
            <span>
              <img
                className="max-w-full h-auto"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/Phase3/PC/Desktop_QuadCard_186x116_01._SY116_CB575166656_.jpg"
                alt=""
              />
              <p>Budget | Under ₹10,000</p>
            </span>
            <span>
              <img
                className="max-w-full h-auto"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/K8/Desktop_QuadCard_186x116._SY116_CB575152829_.jpg"
                alt=""
              />
              <p>
                Mid range | ₹10,000- <br />
                ₹25,000
              </p>
            </span>
            <span>
              <img
                className="max-w-full h-auto"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/K8/Desktop_QuadCard_186x116_01._SY116_CB575152829_.jpg"
                alt=""
              />
              <p>Premium | ₹25,000-₹40,000</p>
            </span>
            <span>
              <img
                className="max-w-full h-auto"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/Phase3/PC/Desktop_QuadCard_186x116_04._SY116_CB575166656_.jpg"
                alt=""
              />
              <p>
                Ultra premium | Above <br />
                ₹40,000
              </p>
            </span>
          </div>
        </Link>

        <Link
          href="/products/furniture"
          className="cursor-pointer bg-white p-5 m-2 min-w-full h-auto"
        >
          <h2 className="text-2xl font-bold mb-2 mt-3 ">
            Minimum 50% off | Restyle your home
          </h2>

          <div className="grid grid-cols-2 gap-2 ">
            <span>
              <img
                className="max-w-full h-auto"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/Jupiter/QCandCC/PCQCRevised/Curtain_186x116_QC_PC_5._SY116_CB575816590_.jpg"
                alt=""
              />
              <p>Curtains</p>
            </span>
            <span>
              <img
                className="max-w-full h-auto"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/Jupiter/QCandCC/PCQCRevised/Functional_Lighting-1_186_116._SY116_CB575816590_.jpg"
                alt=""
              />
              <p>Floor Lamps</p>
            </span>
            <span>
              <img
                className="max-w-full h-auto"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/Jupiter/QCandCC/PCQCRevised/Under-Bed-Storage-1-186x116._SY116_CB575816590_.jpg"
                alt=""
              />
              <p>Under bed storage</p>
            </span>
            <span>
              <img
                className="max-w-full h-auto"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/Jupiter/QCandCC/PCQCRevised/Showpieces-2_186x116._SY116_CB575816590_.jpg"
                alt=""
              />
              <p>Showpieces and idols</p>
            </span>
          </div>
        </Link>
        <Link
          href="/products/laptops"
          className="cursor-pointer bg-white p-5 m-2 min-w-full h-auto"
        >
          <h2 className="flex text-2xl font-bold mb-2 mt-3 items-center justify-center ">
            Up to 80% off | Laptops
          </h2>
          <img
            className="max-w-full h-auto m-auto"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Central/P3/CEPC/R01_Cepc_Desktop_CC_1x._SY304_CB575146312_.jpg"
            alt=""
          />
        </Link>
        <div className="bg-white p-5 m-2 min-w-full h-auto">
          <h2 className="flex text-2xl font-bold mb-2 mt-3 items-center justify-center ">
            Log in for your best experience
          </h2>
          <div className="flex items-center justify-center rounded-md p-5 bg-blue-400 text-white font-bold text-lg">
            <Link href="/login">Log In Securely</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
