"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function UserProfile(): JSX.Element {
  const [success, setSuccess] = useState(true);
  const router = useRouter();

  const successToast = () => toast("User has logged out successfully !");
  const failureToast = () => toast("Error logging out. Please try again ");
  const [data, setData] = useState("nothings");
  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      console.log("User logged out");

      setSuccess(true);
      successToast();

      setTimeout(() => router.push("/login"), 4000);
    } catch (error: any) {
      setSuccess(false);
      failureToast();
      console.log("error logging out ", error.message);
    }
  };

  const getCurrentUserDetails = async () => {
    const response = await axios.get("/api/users/user");
    console.log(response.data);

    setData(response.data.data.username);
  };

  useEffect(() => {
    getCurrentUserDetails();
  }, []);

  return (
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
      <div className="flex flex-col items-center justify-center min-h-screen  py-2">
        <h1> Profile</h1>
        <hr />
        Welcome
        <span className="text-4xl p-2 rounded bg-orange-400 capitalize">
          {data}
        </span>
        <button
          onClick={logout}
          className="pl-20 pr-20 p-2 bg-blue-500 text-white border  border-gray-300 rounded-lg mt-10 focus:outline-none focus:border-gray-600"
        >
          Logout
        </button>
      </div>
    </>
  );
}
