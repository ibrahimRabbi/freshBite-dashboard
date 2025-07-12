'use client'
import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiLock } from "react-icons/bi";
import Image from "next/image";
import plateImage from '../../../assets/auth/Frame.png'
import Link from "next/link";






const Login = () => {
    const [checkboxError, setCheckboxError] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    //   const navigate = useNavigate();
    //   const [error, setError] = useState("");
    //   const [signIn] = useSignInMutation();
    //   const [cookies, setCookie, removeCookie] = useCookies(["token"]);

    //   const handleCheckboxChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     setIsChecked(e.target.checked);
    //     if (e.target.checked) {
    //       setCheckboxError("");
    //     }
    //   };


    //   const onFinish = async (values) => {
    //     if (!isChecked) {
    //       setCheckboxError("You must agree to the terms");
    //       return;
    //     }

    //     try {
    //       const res = await signIn(values).unwrap();
    //       if (res?.code == 200) {
    //         toast.success(res?.message);
    //         setCookie("token", res?.data?.attributes?.accessToken);
    //       }
    //       setTimeout(() => {
    //         navigate("/");
    //       }, 1000);
    //     } catch (err) {
    //       setError(error?.data?.message);
    //     }


    //   };



    return (
        <section className="bg-[#f0f0f0] pt-20 h-screen">
            <div className="shadow-xl w-[70%] mx-auto bg-white flex items-center justify-start relative">

                <Image src={plateImage} alt="Signin" className="w-[50%]" />



                <div className="w-1/2 absolute right-20">
                    <div>
                        <h1 className="mt-4 md:mt-7 text-left text-[#222222] text-[25px] font-bold md:text-2xl">
                            Hello, Welcome!
                        </h1>
                        <p className="font-poppins text-left w-full text-[14px] md:text-[16px] font-normal mt-2">
                            Please Enter Your Details Below to Continue
                        </p>
                    </div>

                    <div className="mt-5">
                        <Form
                            name="normal_login"
                            layout="vertical"
                            initialValues={{ remember: true }}
                        //onFinish={onFinish}
                        >
                            <Form.Item
                                name="email"
                                label={
                                    <span className="text-[16px] mt-5 font-medium">Email</span>
                                }
                                rules={[
                                    { required: true, message: "Please input your email!" },
                                    {
                                        pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                                        message: "Please enter a Gmail address!",
                                    },
                                ]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Enter Your Email"
                                    prefix={
                                        <HiOutlineMailOpen
                                            className="mr-2 bg-white text-black rounded-full p-[6px]"
                                            size={28}
                                        />
                                    }
                                    className="p-2 border-2 border-zinc-700"
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label={
                                    <span className="text-[16px] font-medium">Password</span>
                                }
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

                            <div className="flex justify-between items-center">
                                <Form.Item>
                                    <Checkbox
                                        className="text-black"
                                        checked={isChecked}
                                    // onChange={handleCheckboxChange}
                                    >
                                        Remember me
                                    </Checkbox>
                                    {checkboxError && (
                                        <p className="text-red-500 font-medium">{checkboxError}</p>
                                    )}
                                </Form.Item>
                                <div className="mb-4 flex justify-between items-center">
                                    <Link href="/auth/forget-password">
                                        <p className="cursor-pointer text-[14px] font-medium text-black">
                                            Forgot password?
                                        </p>
                                    </Link>
                                </div>
                            </div>

                            <Form.Item>
                                {/* <p className='text-red-500 font-semibold'>{error}</p> */}
                                <Button
                                    htmlType="submit"
                                    style={{ backgroundColor: '#1C2D07', color: 'white', padding: '20px', width: '100%' }}
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

// // Include the fcmToken in the submitted values
// const formData = {
//     ...values,
//     fcmToken: fcmToken // Add fcmToken to the submission
// };

// try{
//     const res = await adminLogin(formData).unwrap();
//     // console.log(res);
//     if(res?.code == 200){
//         toast.success(res?.message)
//          localStorage.setItem('user',JSON.stringify(res?.data?.attributes))
//          localStorage.setItem('token', res?.data?.attributes?.tokens?.access?.token)

//     }
//     setTimeout(() => {

//         navigate('/dashboard/home')
//     }, 1000);

// }catch(error){
//     console.log(error);
//     setError(error?.data?.message)

// }
