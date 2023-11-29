"use client";

import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { FormData } from "../sign-up/page";
import { useRouter } from "next/navigation";
import { BiLoaderAlt } from "react-icons/bi";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/customer/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data));
        router.push("/");
      } else {
        const errorData = await response.json();
        // console.log(errorData);
      }
    } catch (error) {
      // console.error("Error during registration:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-11 sm:col-9 md:col-7 mx-auto">
              <div className="mb-14 text-center">
                <h2 className="max-md:h1 md:mb-2">Login</h2>
                <p className="md:text-lg">
                  Please fill your email and password to login
                </p>
              </div>

              <form onSubmit={handleLogin}>
                <div>
                  <label className="form-label">Email Address</label>
                  <input
                    className="form-input"
                    placeholder="Type your email"
                    type="email"
                    onChange={handleChange}
                    name="email"
                  />
                </div>

                <div>
                  <label className="form-label mt-8">Password</label>
                  <input
                    className="form-input"
                    placeholder="********"
                    type="password"
                    onChange={handleChange}
                    name="password"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary md:text-lg md:font-medium w-full mt-10"
                >
                  {loading ? <BiLoaderAlt className={`animate-spin mx-auto`} size={26}/> : "Log In"}
                </button>
              </form>

              <div className="flex gap-x-2 text-sm md:text-base mt-4">
                <p className="text-light dark:text-darkmode-light">
                  Don&apos;t have an account?
                </p>
                <Link
                  className="underline font-medium text-dark dark:text-darkmode-dark"
                  href={"/sign-up"}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
