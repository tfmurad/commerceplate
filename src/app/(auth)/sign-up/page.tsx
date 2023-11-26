"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

export interface FormData {
  firstName?: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const response = await fetch("/api/customer/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data));
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-11 sm:col-9 md:col-7 mx-auto">
              <div className="mb-14 text-center">
                <h2 className="max-md:h1 md:mb-2">Create an account</h2>
                <p className="md:text-lg">
                  Create an account and start using...
                </p>
              </div>

              <form onSubmit={handleSignUp}>
                <div>
                  <label className="form-label">Name</label>
                  <input
                    name="firstName"
                    className="form-input"
                    placeholder="Enter your name"
                    type="text"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="form-label mt-8">Email Address</label>
                  <input
                    name="email"
                    className="form-input"
                    placeholder="Type your email"
                    type="email"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="form-label mt-8">Password</label>
                  <input
                    name="password"
                    className="form-input"
                    placeholder="********"
                    type="password"
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary md:text-lg md:font-medium w-full mt-10"
                >
                  Sign Up
                </button>
              </form>

              <div className="flex gap-x-2 text-sm md:text-base mt-6">
                <p className="text-light dark:text-darkmode-light">
                  I have read and agree to the
                </p>
                <Link
                  className="underline font-medium text-dark dark:text-darkmode-dark"
                  href={"/terms-services"}
                >
                  Terms & Conditions
                </Link>
              </div>

              <div className="flex gap-x-2 text-sm md:text-base mt-2">
                <p className="text-light dark:text-darkmode-light">
                  Have an account?
                </p>
                <Link
                  className="underline font-medium text-dark dark:text-darkmode-dark"
                  href={"/login"}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
