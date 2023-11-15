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
      // console.log(user);

      const response = await axios.post("/api/users/signup", user);
      // console.log("signup successful", response.data);

      successToast();
      setUser({
        email: "",
        password: "",
        username: "",
      });

      setTimeout(() => router.push("/login"), 1000);
    } catch (error: any) {
      // console.log("signup failed", error.message);
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
    // console.log(buttonDisabled);
  }, [user]);

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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            New User? Sign Up Here!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                className=" mb-8 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                id="username"
                placeholder="Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                className=" mb-8 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                id="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                className="mb-8 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="password"
                id="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
          </div>

          <div>
            <button
              disabled={buttonDisabled}
              onClick={onSignup}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {buttonDisabled ? "Please fill details" : "Sign Up"}
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link
              href="/signin"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign In Here!
            </Link>
          </p>
        </div>
      </div>
      <div className="capitalize flex flex-col items-center justify-center min-h-screen py-2">
        <h1> {isLoading ? "Loading..." : "Sign Up "} </h1>
        <hr />
        <label htmlFor="username">username</label>

        <hr />
        <label htmlFor="email">email</label>

        <hr />
        <label htmlFor="password">password</label>

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
