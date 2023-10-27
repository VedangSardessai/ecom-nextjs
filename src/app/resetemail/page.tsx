"use client";

import { sendEmail } from "@/helpers/myMailer";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import User from "@/models/userModel";

export default function ResetEmail() {
  const [email, setEmail] = useState("");

  const successToast = () => toast("Reset email sent successfully");
  const failureToast = () => toast("Invalid Email");

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const sendResetEmail = async () => {
    if (isValid) {
      try {
        setIsLoading(true);
        setSuccess(true);

        axios.post("/api/users/resetemail", { email });

        successToast();
        setTimeout(() => router.push("/login"), 1000);
      } catch (error: any) {
        console.log("signup failed", error.message);
        setSuccess(false);
        failureToast();
      } finally {
        setIsLoading(false);
      }
    } else {
      failureToast();
    }
  };

  useEffect(() => {
    // Regular expression to validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (emailRegex.test(email)) {
      setIsValid(true);
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);

      setIsValid(false);
    }
  }, [email]);

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
      <div className="flex flex-col items-center  py-2">
        <h1 className="text-4xl flex flex-col items-center  py-2 mb-20">
          Reset Password
        </h1>

        <div className="capitalize flex flex-col items-center py-2">
          <hr />
          <label htmlFor="email">Email</label>
          <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <button
              onClick={sendResetEmail}
              disabled={buttonDisabled}
              className="capitalize p-2 pl-20 pr-20 bg-blue-500 text-white border  border-gray-300 rounded-lg mt-10 focus:outline-none focus:border-gray-600"
            >
              {buttonDisabled
                ? "Please Enter a valid email address"
                : "Click here to send a reset password email"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
