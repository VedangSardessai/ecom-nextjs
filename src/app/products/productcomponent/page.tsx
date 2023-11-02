"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function DisplayProducts({ products }: any) {
  const router = useRouter()
  return (
    <div className="m-5 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product: any) => (
        <div
          onClick={() => router.push('/products/buynow/'+product.id)}
          key={product.id}
          className="group relative"
        >
          <div
            className="aspect-h-1 
          aspect-w-1 w-full overflow-hidden 
          rounded-md bg-gray-200 lg:aspect-none 
          group-hover:opacity-75"
          >
            <img
              src={product.images[1]}
              alt={product.name}
              className="object-cover object-center h-80 w-80 lg:h-80 lg:w-80"
            />
          </div>

          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  {product.title}
                </a>
              </h3>
            </div>

            <p className="text-sm font-medium text-gray-900">
              ₹{82 * product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
