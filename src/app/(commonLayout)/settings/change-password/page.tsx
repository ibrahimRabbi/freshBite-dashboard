'use client'
import { Button, Form, Input } from 'antd';
import React, { use } from 'react';
import {
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";

import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useChangePasswordMutation } from '@/redux/features/user/userApi';
import { ArrowLeft } from 'lucide-react';


const page = () => {
  const [form] = Form.useForm();
  const [updatingProfile, { isLoading }] = useChangePasswordMutation();
  const router = useRouter();

  const handleSubmit = async (values: any) => {

    try {

      if (values.newPassword !== values.confirmPassword) {
        toast.error('New password and confirm password do not match');
        return;
      }

      const data = {
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      }
      const updating = await updatingProfile(data).unwrap();
      if (updating.status === 200) {
        toast.success('Password changed successfully');
        setTimeout(() => {
          router.push('/settings');
        }, 1000);
      }
    } catch (error:any) {
      toast.error(error?.data?.message || 'Failed to change password' );
    }
  };



  return (
    <section className="mt-16 ml-8 bg-white h-screen rounded-lg shadow-md p-20">
      {/* Back Button */}
      <div className="flex items-center mb-6 -ml-4">
        <button 
          onClick={() => router.push('/settings')} 
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-lg font-medium">Back</span>
        </button>
      </div>

      <div className="w-[40%] ">
        <Form layout='vertical' form={form} className="mt-8" onFinish={handleSubmit}>

          <Form.Item
            name="currentPassword"
            label='current password'
            rules={[
              { required: true, message: "Please input your Password!" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              suffix={<EyeInvisibleOutlined />}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              type="password"
              placeholder="type current Password"
              style={{ padding: '10px' }}
            />
          </Form.Item>



          <Form.Item
            name="newPassword"
            label='New Password'
            rules={[
              { required: true, message: "Please input new Password!" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              suffix={<EyeInvisibleOutlined />}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              type="password"
              placeholder="Type New Password"
              style={{ padding: '10px' }}
            />
          </Form.Item>



          <Form.Item
            name="confirmPassword"
            label='confirm new password'
            rules={[
              { required: true, message: "Please input confirm Password!" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              suffix={<EyeInvisibleOutlined />}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              type="type confirm password"
              placeholder="type confirm password"
              style={{ padding: '10px' }}
            />
          </Form.Item>

          <Button
            htmlType="submit"
            style={{ backgroundColor: '#1C2D07', color: 'white', padding: '20px', width: '30%' }}
          >
            Update
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default page;