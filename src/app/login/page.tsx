"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function Login(): JSX.Element {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const successToast = () => toast("User has logged in successfully!!!");
  const failureToast = (error: any) => toast(error);
  const [errorMessage, setErrorMessage] = useState("");

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(true);
  const [data, setData] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (user.email && user.password) setButtonDisabled(false);
    else setButtonDisabled(true);
  }, [user]);

  const getCurrentUserDetails = async () => {
    try {
      const response = await axios.get("/api/users/user");
      // console.log(response.data);
      setData(response.data.data);
      return response.data.data; // Return the username
    } catch (error) {
      // console.error("Error fetching user details:", error);
      return null; // Handle the error gracefully
    }
  };

  const onLogin = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/users/login", user);
      const data = await getCurrentUserDetails();

      if (data) {
        setSuccess(true);
        successToast();

        // console.log(user.email);
        // const userDataFromLogin :
        // const dispatchData = dispatch(login(user.email));
        // console.log(dispatchData);
        router.push(`/profile/${data._id}`);
      }
    } catch (error: any) {
      setSuccess(false);
      if (error.response) failureToast(error.response.data.error);
      else failureToast("Something went wrong, please try again");

      // console.error("Error login:", errorMessage);
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

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
              <div className="text-sm">
                <Link
                  href="/resetemail"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </Link>
              </div>
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
              onClick={onLogin}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {buttonDisabled ? "Please fill details" : "Login Here"}
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              href="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign Up Here!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
