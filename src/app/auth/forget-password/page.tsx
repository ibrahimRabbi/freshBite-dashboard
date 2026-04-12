'use client'
import { Form, Input, Button } from "antd";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlineArrowBackIos } from "react-icons/md";
import forgetPassImage from '../../../assets/auth/2.png'
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { useForgetPasswordMutation } from "@/redux/features/user/userApi";
import { setCookie } from "cookies-next/client";
import { useRouter } from "next/navigation";


const ForgotPassword = () => {

  const router = useRouter();

  const [forgetPass, { isLoading }] = useForgetPasswordMutation();



  const handleForgotPassword = async (values: any) => {
    try {
      const res = await forgetPass(values).unwrap()
      if (res?.status == 200) {
        toast.success(res?.message)
        setCookie('token', res?.verificationToken)
        setTimeout(() => {
          router.push(`/auth/verify`);
        }, 1000);
      }

    } catch (error: any) {
      toast.error(error?.data?.message || 'something went wrong')
    }
  };



  return (
    <section className="bg-[#f0f0f0] pt-20 h-screen">
      <div className="shadow-xl w-[80%] md:w-[1096px] mx-auto flex items-center gap-5 bg-white p-20">

        <Image
          src={forgetPassImage}
          alt="Forgot Password"
          className="w-[30%] object-cover"
        />


        {/* Form Section */}
        <div className="w-[60%] mx-auto">
          <div className="flex items-center gap-2">
            <Link href="/auth/sign-in"><MdOutlineArrowBackIos className="text-2xl cursor-pointer text-black" /></Link>

            <h1 className="text-[#222222] font-semibold text-[22px]">
              Forgot Password!
            </h1>
          </div>
          <p className="font-poppins text-[8px] text-[#222222] md:text-[14px] font-normal mt-2">
            Enter the email address associated with your account. We'll send
            you an OTP to your email.
          </p>

          <Form
            name="forgot_password"
            layout="vertical"
            onFinish={handleForgotPassword}
            className="mt-5"
          >
            <Form.Item
              name="email"
              label={
                <span className="text-[16px] mt-5 font-medium">Email</span>
              }
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
                {
                  pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  message: "Please enter a Gmail address!",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Enter Your Email"
                name="email"
                prefix={
                  <HiOutlineMailOpen
                    className="mr-2 bg-white text-black rounded-full p-[6px]"
                    size={28}
                  />
                }
                className="border-2 border-zinc-700 p-2"
              />
            </Form.Item>
            {/* <p className="text-red-500 font-medium">{error}</p> */}
            <Form.Item>
              <Button
                loading={isLoading}
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: '#1C2D07', color: 'white', padding: '20px', width: '100%' }}
              >
                Send OTP
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

    </section>
  );
};

export default ForgotPassword;
