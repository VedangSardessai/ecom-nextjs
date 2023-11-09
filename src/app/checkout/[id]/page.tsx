"use client";
import React, { useEffect, useState } from "react";
import CartDisplayerComponent from "@/app/products/cart/[id]/page";
import toast from "react-hot-toast";
import axios from "axios";
import { ID } from "appwrite";

type FormData = {
  order_id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
};

type FormErrors = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
};
export default function CheckoutComponent() {
  const [formData, setFormData] = useState<FormData>({
    order_id: "54545482645454",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const failureToast = (error: any) => toast(error);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const validateForm = () => {
    const newErrors = {} as FormErrors;

    // Validation for first name and last name (minimum 3 characters)
    if (formData.firstName.length < 3) {
      newErrors.firstName = "First name must be at least 3 characters";
      failureToast(newErrors.firstName);
    } else {
      newErrors.firstName = "";
    }

    if (formData.lastName.length < 3) {
      newErrors.lastName = "Last name must be at least 3 characters";
      failureToast(newErrors.lastName);
    } else {
      newErrors.lastName = "";
    }

    // Email validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      failureToast(newErrors.email);
    } else {
      newErrors.email = "";
    }

    // Validation for city and state (minimum 2 characters)
    if (formData.city.length < 2) {
      newErrors.city = "City must be at least 2 characters";
      failureToast(newErrors.city);
    } else {
      newErrors.city = "";
    }

    if (formData.state.length < 2) {
      newErrors.state = "State must be at least 2 characters";
      failureToast(newErrors.state);
    } else {
      newErrors.state = "";
    }

    // Validation for postal code (exactly 6 digits)
    if (!/^\d{6}$/.test(formData.postalCode)) {
      newErrors.postalCode = "Postal code must be exactly 6 digits";
      failureToast(newErrors.postalCode);
    } else {
      newErrors.postalCode = "";
    }

    setErrors(newErrors);

    // Check if there are any errors
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      const uniqueId = ID.unique();
      // setFormData({ ...formData, order_id: 'uniqueId' });
      console.log("Form is valid. Submitting data: ", { formData });
      const response = await axios.post(
        "/api/appwrite_api/add_to_orders",
        formData
      );
      setFormData({
        order_id: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        email: "",
        postalCode: "",
      });
    } else {
      // Form is not valid, you can display error messages or take other actions
      console.log(errors);
      console.log("Form is not valid");
    }
  };
  return (
    <>
      <div className="m-10 flex items-center justify-center gap-x-6">
        <button
          onClick={handleSubmit}
          type="submit"
          className="
          bg-blue-400  font-medium text-lg @apply bg-[linear-gradient(to_right,#1FA2FF_0%,#12D8FA_51%,#1FA2FF_100%)] text-center uppercase transition-[0.5s] bg-[200%_auto] shadow-[0_0_20px_#eee] m-2.5 px-[45px] py-[15px] hover:bg-[right_center] hover:text-white hover:no-underline
          w-2/3 h-12 rounded-md text-white  "
        >
          Click Here To Place Order!
        </button>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
        <form className="z-0 sm:m-10">
          <div className="pt-5 space-y-12">
            <div className="border-b border-gray-900/10 mb-8  ml-10">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive your order.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="pr-32 block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div> */}

                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State
                  </label>
                  <div className="mt-2">
                    <input
                      value={formData.state}
                      onChange={(e) =>
                        setFormData({ ...formData, state: e.target.value })
                      }
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      value={formData.postalCode}
                      onChange={(e) =>
                        setFormData({ ...formData, postalCode: e.target.value })
                      }
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="flex flex-col sm:flex-row gap-y-6 sm:gap-y-0">
          <div className="w-full">
            <CartDisplayerComponent summary={true} />
          </div>
        </div>
      </div>
    </>
  );
}
