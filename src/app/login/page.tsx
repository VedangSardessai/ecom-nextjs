"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function Login(): JSX.Element {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const successToast = () => toast("User has signed up successfully!!!");
  const failureToast = () => toast("Error signing up. Please try again ");

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (user.email && user.password) setButtonDisabled(false);
    else setButtonDisabled(true);
  }, [user]);

  const onLogin = async () => {
    try {
      setIsLoading(true);
      setSuccess(true);
      const response = await axios.post("/api/users/login", user);
      console.log("User logged in");

      successToast();

      setTimeout(() => router.push("/profile"), 3000);
    } catch (error: any) {
      console.log("error login ", error.message);
    }
  };
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
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Login</h1>
        <hr />

        <label htmlFor="email">email</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          type="text"
          id="email"
          placeholder="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <hr />
        <label htmlFor="password">password</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          type="password"
          id="password"
          placeholder="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button
          onClick={onLogin}
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        >
          Login Here
        </button>
        <Link href="/signup">Visit Sign Up Page</Link>
      </div>
    </>
  );
}
