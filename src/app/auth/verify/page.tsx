'use client'

import otpImage from "../../../assets/auth/pana.png";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { Button } from "antd";
import { MdOutlineArrowBackIos } from "react-icons/md";
// import toast, { Toaster } from "react-hot-toast";
// import { useSendOtpMutation } from "../redux/features/auth/authApi";
import Image from "next/image";



const VerifyOtp = () => {


const [otp, setOtp] = useState("");
//   const [verify] = useSendOtpMutation();
//   const navigate = useNavigate();
//   const { state } = useLocation();

  const sendOtp = async () => {
    try {
    //   const res = await verify({ otp, email: state?.values?.email }).unwrap();

    //   if (res?.code === 200) {
    //     // toast.success("otp is correct");
    //     setTimeout(() => {
    //     //   navigate("/reset-password");
    //     }, 1000);
    //   }
    } catch (err) {
    //   toast.error(err?.data?.message);
    }
  };

  return (
    <section className="bg-[#f0f0f0] pt-16 h-screen">
      <div className="w-full max-w-[1296px] shadow-xl mt-12 sm:mt-24 bg-white mx-auto p-4 sm:p-10">

        <div className="flex justify-center items-center gap-6">
         
            <Image
              src={otpImage}
              alt="OTP Illustration"
              className="w-[400px]"
            />
          <div className="w-full sm:w-[494px] mt-4 sm:mt-0">
            <div className="flex items-center gap-2">
              <MdOutlineArrowBackIos
                // onClick={() => navigate("/forget-Password")}
                className="text-2xl cursor-pointer"
              />

              <h1 className="text-[#222222] text-[22px] font-semibold md:text-2xl">
                Send Otp!
              </h1>
            </div>
            <p className="font-poppins text-[10px] sm:text-[12px] font-normal mt-2">
              We'll send a verification code to your email. Check your inbox and
              enter the code here.
            </p>
            <div className="py-4 sm:py-6">
              <div className="flex justify-center sm:justify-start items-center gap-2 outline-none focus:border-blue-400 w-full">
                <OTPInput
                 value={otp}
                onChange={setOtp}
                  numInputs={6}
                  inputStyle={{
                    height: "52px",
                    width: "55px", // Default width for mobile
                    background: "transparent",
                    border: "1px solid #1C2D07",

                    borderRadius: "10px",
                    marginRight: "8px",
                    outline: "none",
                    // Adjusting width for larger screens
                    // sm: {
                    //   width: "80px", // Width for larger screens
                    // },
                  }}
                  renderSeparator={<span className="md:w-6"> </span>}
                  renderInput={(props) => (
                    <input {...props} className="sm:w-[60px]" />
                  )}
                />
              </div>
            </div>
            {/* <p className="text-red-500 font-medium">{error}</p> */}

            <Button
            //   onClick={sendOtp}
              className="block w-full h-[45px] mt-2 !text-white !bg-[#1C2D07] !p-5 rounded-full"
            >
              Verify
            </Button>

            <div className="flex justify-between items-center mt-4 sm:mt-6">
              <small className="text-[14px] sm:text-[16px] font-normal">
                Didn’t receive the code?
              </small>
              <small className="text-[14px] sm:text-[16px] font-medium text-[#1C2D07] cursor-pointer">
                Resend
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyOtp;
