"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function VerifyEmail() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    // console.log(token);

    setToken(urlToken || "");
  }, [token]);

  useEffect(() => {
    const verifyUserEmail = async () => {
      try {
        const response = await axios.post("/api/users/verifyemail", { token });
        // console.log(response.data);
        setVerified(true);
      } catch (error: any) {
        // console.log(error.message, "Error in verifying email");
        setError(true);
      }
    };
    if (token.length > 0) verifyUserEmail();
    // console.log(token);
  }, [token]);

  return (
    <>
      <div className="flex flex-col items-center min-h-screen py-2">
        <h1 className="text-4xl flex flex-col items-center  py-2 ">
          Email Verification
        </h1>
        {/* <h2>{token ? `${token}` : "no token"}</h2> */}

        {!token && (
          <div className=" flex flex-col items-center justify-center mt-10 text-2xl text-red-300 font-bold">
            Please click the link in your inbox to visit this page!
            <div className="">Thank you</div>
          </div>
        )}
        {verified && (
          <div className=" capitalize flex flex-col items-center justify-center min-h-screen py-2">
            <h2 className="text-2xl">
              Your Email Has Been Verified Successfully! Please login to
              continue
            </h2>

            <div className="mt-10">
              <Link
                className="capitalize p-2 pl-20 pr-20 bg-blue-500 text-white border  border-gray-300 rounded-lg mt-10 focus:outline-none focus:border-gray-600"
                href="/login"
              >
                Continue to Login !
              </Link>
            </div>
          </div>
        )}
        {error && (
          <div>
            <h2 className="text-2xl">Error Occured</h2>
          </div>
        )}
      </div>
    </>
  );
}
