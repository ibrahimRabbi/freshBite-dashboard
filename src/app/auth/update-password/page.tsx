'use client'
import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined,
} from "@ant-design/icons";
import resetPass from '../../../assets/auth/rafiki.png';
import { MdOutlineArrowBackIos } from 'react-icons/md';
// import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';





const ResetUpdatePassword = () => {
  const [form] = Form.useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);


//   const location = useLocation();
//  const queryParams = new URLSearchParams(location.search)
//  const email = queryParams.get('email')

 
  const handlePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const handleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

  const validateConfirmPassword = (rule:any, value:any) => {
    const { password } = form.getFieldsValue();
    if (value && value !== password) {
      return Promise.reject('Passwords do not match!');
    }
    return Promise.resolve();
  };

 
  

  const resetPassword = async () => {
   
//  navigate('/')
   
    };
   

  return (
    <section className="bg-[#f0f0f0] pt-24 h-screen">
      {/* <Toaster /> */}
      <div className="flex items-center justify-center shadow-xl mx-auto bg-[#FFFFFF] w-[65%] p-20">
        <Image className="w-[45%]" src={resetPass} alt="Update Password" />

        <div className="w-1/2">
          <div className="flex items-center gap-2">
            <MdOutlineArrowBackIos className="text-2xl" />

            <h1 className="text-[#222222] font-bold text-[22px]">
              Update Pssword!
            </h1>
          </div>
          <Form
            form={form}
            layout="vertical"
            className="mt-5"
            onFinish={resetPassword}
          >
            <Form.Item
              label="New Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your new password!",
                },
              ]}
            >
              <Input.Password
                placeholder="New password"
                prefix={<LockOutlined />}
                iconRender={(visible) =>
                  visible ? (
                    <EyeOutlined onClick={handlePasswordVisibility} />
                  ) : (
                    <EyeInvisibleOutlined onClick={handlePasswordVisibility} />
                  )
                }
                className="p-2 mt-2"
              />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please confirm your new password!",
                },
                { validator: validateConfirmPassword },
              ]}
            >
              <Input.Password
                placeholder="Confirm Password"
                prefix={<LockOutlined />}
                iconRender={(visible) =>
                  visible ? (
                    <EyeOutlined onClick={handleConfirmPasswordVisibility} />
                  ) : (
                    <EyeInvisibleOutlined
                      onClick={handleConfirmPasswordVisibility}
                    />
                  )
                }
                className="p-2 mt-2"
              />
            </Form.Item>
            <Button
              // loading={isLoading}
              type="primary"
              htmlType="submit"
              className="block w-full h-[48px] rounded-lg mt-2 !text-white !bg-[#1C2D07] !p-4"
            >
              Update Password
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ResetUpdatePassword;
