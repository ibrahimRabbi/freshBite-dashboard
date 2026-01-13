'use client';

import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiLock } from "react-icons/bi";
import Image from "next/image";
import plateImage from "../../../assets/auth/Frame.png";
import Link from "next/link";
import { useSignInMutation } from "@/redux/features/user/userApi";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next/client";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [signIn] = useSignInMutation();

  const onFinish = async (values: any) => {
    try {
      const res = await signIn(values).unwrap();
      if (res?.status === 200) {
        toast.success(res?.message);
        setCookie("token", res?.token);
        router.push("/");
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Login failed");
    }
  };

  return (
    <section className="bg-[#f0f0f0] pt-20 h-screen">
      <div className="shadow-xl w-[70%] mx-auto bg-white flex items-center justify-start relative">

        <Image
          src={plateImage}
          alt="Signin"
          className="w-[50%]"
        />

        <div className="w-1/2 absolute right-20">
          <div>
            <h1 className="mt-4 md:mt-7 text-left text-[#222222] text-[25px] font-bold md:text-2xl">
              Hello, Welcome!
            </h1>
            <p className="text-left text-[14px] md:text-[16px] text-black mt-2">
              Please Enter Your Details Below to Continue
            </p>
          </div>

          <div className="mt-5">
            <Form
              name="login_form"
              layout="vertical"
              initialValues={{ remember: false }}
              onFinish={onFinish}
            >
              {/* Email */}
              <Form.Item
                name="email"
                label={<span className="text-[16px] font-medium">Email</span>}
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email address!" },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter Your Email"
                  prefix={
                    <HiOutlineMailOpen
                      className="mr-2 bg-white rounded-full p-[6px]"
                      size={28}
                    />
                  }
                  className="p-2 border-2 border-zinc-700"
                />
              </Form.Item>

              {/* Password */}
              <Form.Item
                name="password"
                label={<span className="text-[16px] font-medium">Password</span>}
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Enter Your Password"
                  prefix={
                    <BiLock
                      className="mr-2 bg-white rounded-full p-[6px]"
                      size={28}
                    />
                  }
                  className="p-2 border-2 border-zinc-700"
                />
              </Form.Item>

              {/* Remember me + Forgot password */}
              <div className="flex justify-between items-center">
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject("Please check remember me"),
                    },
                  ]}
                >
                  <Checkbox className="text-black">
                    Remember me
                  </Checkbox>
                </Form.Item>

                <Link href="/auth/forget-password">
                  <p className="cursor-pointer text-[14px] font-medium text-black mb-4">
                    Forgot password?
                  </p>
                </Link>
              </div>

              {/* Submit */}
              <Form.Item>
                <Button
                  htmlType="submit"
                  style={{
                    backgroundColor: "#1C2D07",
                    color: "white",
                    padding: "20px",
                    width: "100%",
                  }}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
