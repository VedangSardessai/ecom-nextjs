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
      <div className=" capitalize flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Login</h1>
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
          onClick={onLogin}
          className=" capitalize p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        >
          {buttonDisabled ? "Please fill details" : "Login Here"}
        </button>
        <Link href="/resetemail">Forgot Password?</Link>
        <Link href="/signup">Visit Sign Up Page</Link>
      </div>
    </>
  );
}
