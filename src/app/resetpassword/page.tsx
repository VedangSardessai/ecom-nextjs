"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function ResetPassword(): JSX.Element {
  const [newPassword, setNewPassword] = useState("");

  const successToast = () => toast("Password has been reset successfully!!!");
  const failureToast = () =>
    toast("Error resetting password. Please try again ");

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState("");
  const [validPassword, setValidPassword] = useState(true);

  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();

  const resetPassword = async () => {
    try {
      const response = await axios.post("/api/users/resetpassword", {
        token,
        newPassword,
      });
      // console.log(response.data);
      setVerified(true);
      successToast();
    } catch (error: any) {
      // console.log(error.message, "Error in verifying email");
      failureToast();
      setError(true);
    }
  };

  useEffect(() => {
    const getEmail = async () => {
      try {
        const response = await axios.post("/api/users/resetpassword/getemail", {
          token,
        });
        setEmailError(false);
        setUserEmail(response.data.user.email);
      } catch (error: any) {
        setEmailError(true);
        setIsLoading(false);
        // console.log(error.message, "Error in resetting password");
        setError(true);
      }
    };

    if (token.length > 0) getEmail();
    // console.log(token);
  }, [token]);

  useEffect(() => {
    const validatePassword = () => {
      const passwordRegex = /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{8,}$/;
      const isValid = passwordRegex.test(newPassword);

      if (!isValid) {
        setPasswordError(
          "Password must contain 8 alphanumeric characters and a special character"
        );
        setValidPassword(false);
      } else {
        setPasswordError("");
        setValidPassword(true);
      }

      setButtonDisabled(!isValid);
    };
    validatePassword();
  }, [newPassword]);

  useEffect(() => {
    if (newPassword) setButtonDisabled(false);

    if (newPassword.length < 8) setButtonDisabled(true);
  }, [newPassword]);

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    // console.log(urlToken);

    setToken(urlToken || "");
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

      <div className="capitalize flex flex-col items-center  min-h-screen py-2">
        <h1 className="text-2xl mb-40 ">
          {" "}
          {isLoading ? "Loading..." : "Reset password"}{" "}
        </h1>

        <hr />

        <span>
          {emailError ? (
            <div>
              <span>
                <h1
                  className={` ${
                    emailError ? "text-red-500" : "text-blue-500"
                  } text-xl`}
                >
                  Reset Email Expired. Please try to reset password again
                  clicking the link below!
                </h1>
              </span>

              <Link
                href="/resetemail"
                className="mt-4 flex justify-center items-center font-semibold text-lg  text-indigo-600 hover:text-indigo-500"
              >
                Reset Email Here!
              </Link>
            </div>
          ) : (
            <span className="lowercase">
              Changing Password for : {userEmail}
            </span>
          )}
        </span>
        <hr />
        {!emailError && (
          <>
            <label htmlFor="password">Enter new password</label>
            <input
              className=" p-2 border border-gray-300 rounded-lg mt-4 mb-4 focus:outline-none focus:border-gray-600"
              type="password"
              id="password"
              placeholder="Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <p className="mb-2 text-blue-400 font-bold">{passwordError}</p>

            <button
              disabled={buttonDisabled}
              onClick={resetPassword}
              className=" capitalize p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            >
              {buttonDisabled ? "Please fill details" : "Reset Password"}
            </button>
          </>
        )}
      </div>
    </>
  );
}
