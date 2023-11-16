"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { HashLoader } from "react-spinners";

export default function UserProfile(): JSX.Element {
  const [success, setSuccess] = useState(true);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const successToast = () => toast("User has logged out successfully !");
  const failureToast = () => toast("Error logging out. Please try again ");
  const [data, setData] = useState("");

  const [userId, setUserId] = useState("");
  const [orders, setOrders] = useState([]);
  const getOrders = async (userId: any) => {
    try {
      console.log(userId);

      const response = await axios.get("/api/appwrite_api/get_orders");
      console.log(response, "response fend");

      if (response.data.response.documents.length == 0) setLoading(false);

      console.log(response.data.response.documents); // Log the response data
      setOrders(response.data.response.documents);
      if (response.data.response.documents.length > 0) {
        console.log(response.data.response.documents.length);

        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error); // Log any errors
    }
  };

  const getCurrentUserDetails = async () => {
    try {
      const response = await axios.get("/api/users/user");
      console.log(response.data);
      setUserId(response.data.data._id);
      console.log(response.data.data._id);
      setData(response.data.data.username);
      getOrders(userId);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentUserDetails();
  }, [userId]);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <HashLoader size={100} color="#3949ab" />
        </div>
      ) : (
        <>
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              style: {
                background: success ? "green" : "red",
                color: "white",
                margin: "32px",
                borderRadius: "8px",
                paddingTop: "25px",
                paddingBottom: "25px",
                fontSize: "18px",
              },
            }}
          />
          <div className="min-h-screen  py-2">
            <span className="flex flex-col items-center  text-4xl p-2 rounded capitalize">
              Welcome {""}
              {data}!
            </span>

            {orders.length > 0 && (
              <div className="ml-20">
                <h1>Your Orders</h1>
                <ul role="list" className="divide-y divide-gray-100">
                  {orders.map((item: any) => (
                    <li
                      key={item.order_id}
                      className="flex justify-between gap-x-6 py-5"
                    >
                      <div className="flex min-w-0 gap-x-4">
                        {/* <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={item.imageUrl}
                    alt=""
                  /> */}
                        <div className="min-w-0 flex-auto">
                          <p className="text-xl font-semibold leading-6 text-gray-900">
                            Order Id : {item.order_id}
                          </p>

                          <div className="mt-1 truncate text-xs leading-5 text-gray-500">
                            <ul
                              role="list"
                              className="divide-y divide-gray-100"
                            >
                              {JSON.parse(item.cart).map((orderItem: any) => (
                                <li
                                  key={orderItem.name}
                                  className="flex justify-between gap-x-6 py-5"
                                >
                                  <div className="flex min-w-0 gap-x-4">
                                    <img
                                      className="h-20 w-20 flex-none rounded-full bg-gray-50"
                                      src={orderItem.img}
                                      alt=""
                                    />
                                    <div className="min-w-0 flex-auto">
                                      <p className="capitalize text-lg font-semibold leading-6 text-gray-900">
                                        {orderItem.name}
                                      </p>
                                      <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                                        Quantity : {orderItem.quantity}
                                      </p>
                                      <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                                        ₹ {orderItem.price * 75}
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {orders.length == 0 && <div>Oops ! No orders here</div>}
          </div>
        </>
      )}
    </>
  );
}
