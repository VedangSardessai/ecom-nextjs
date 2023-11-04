"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/redux/features/cart-slice";
import Link from "next/link";

export default function CartDisplayerComponent() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items); // Access the 'items' property
  const [cartItemDisplay, setCartItemDisplay] = useState([]);
  const [isCartActive, setIsCartActive] = useState(true);

  useEffect(() => {
    setCartItemDisplay(cartItems);
    const localCartData = localStorage.getItem("cart");
    const cartData = localCartData ? JSON.parse(localCartData) : [];
    console.log(cartData);
  }, [cartItems]);

  function calculateTotal(cartItems: any) {
    let total = 0;
    for (const cartItem of cartItems) {
      total += cartItem.price * cartItem.quantity;
    }
    return total * 75;
  }

  const total = calculateTotal(cartItems);

  return (
    <div className="pointer-events-none fixed top-28 inset-y-0 right-0 flex max-w-full ">
      <div className="pointer-events-auto w-screen ">
        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flex items-start justify-between ">
              <div></div>
              <h2
                className="text-lg font-medium text-gray-900 "
                id="slide-over-title"
              >
                Shopping cart
              </h2>
              <div className="ml-3 flex h-7 items-center">
                <Link
                  href="/"
                  className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {total == 0 && (
              <Link
                href="/"
                className="flex flex-col justify-center items-center h-60 font-medium text-xl text-indigo-600 hover:text-indigo-500"
              >
                Your cart is empty. Check out our great variety of products!
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            )}
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cartItemDisplay.map((cartItem: any) => (
                    <li key={cartItem.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={cartItem.img}
                          alt={cartItem.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">{cartItem.name}</a>
                            </h3>
                            <p className="ml-4"> ₹{75 * cartItem.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {cartItem.color}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">
                            Qty
                            <button
                              onClick={() =>
                                dispatch(decreaseQuantity(cartItem.id))
                              }
                              className="pl-2 pr-2 pt-1 pb-1 border border-gray-300 m-2"
                            >
                              -
                            </button>
                            {cartItem.quantity}
                            <button
                              onClick={() =>
                                dispatch(increaseQuantity(cartItem.id))
                              }
                              className="pl-2 pr-2 pt-1 pb-1  border border-gray-300 m-2"
                            >
                              +
                            </button>
                          </p>
                          {/* Include a button to remove this item from the cart */}
                          <button
                            onClick={() =>
                              dispatch(removeFromCart(cartItem.id))
                            }
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            {total > 0 && (
              <>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>₹{total}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Checkout
                  </a>
                </div>
              </>
            )}
            {total > 0 && (
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}