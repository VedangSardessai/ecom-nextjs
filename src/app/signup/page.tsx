"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function SignUp(): JSX.Element {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const successToast = () => toast("User has signed up successfully!!!");
  const failureToast = () => toast("Error signing up. Please try again ");

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const onSignup = async () => {
    try {
      setIsLoading(true);
      setSuccess(true);
      console.log(user);

      const response = await axios.post("/api/users/signup", user);
      console.log("signup successful", response.data);

      successToast();
      setUser({
        email: "",
        password: "",
        username: "",
      });

      setTimeout(() => router.push("/login"), 1000);
    } catch (error: any) {
      console.log("signup failed", error.message);
      setSuccess(false);
      failureToast();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user.email && user.password && user.username) setButtonDisabled(false);

    if (user.password.length < 8 || user.username.length < 3)
      setButtonDisabled(true);
    console.log(buttonDisabled);
    
  },[user]);

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

      <div className="capitalize flex flex-col items-center justify-center min-h-screen py-2">
        <h1> {isLoading ? "Loading..." : "Sign Up "} </h1>
        <hr />
        <label htmlFor="username">username</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          type="text"
          id="username"
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <hr />
        <label htmlFor="email">email</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          type="text"
          id="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <hr />
        <label htmlFor="password">password</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          type="password"
          id="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button
          disabled={buttonDisabled}
          onClick={onSignup}
          className=" capitalize p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        >
          {buttonDisabled ? "Please fill details" : "Sign Up"}
        </button>
        <Link href="/login">Visit Login Page</Link>
      </div>
    </>
  );
}
