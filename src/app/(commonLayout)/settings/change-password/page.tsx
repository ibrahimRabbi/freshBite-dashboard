'use client'
import { Button, Form, Input } from 'antd';
import React from 'react';
import {
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import Link from 'next/link';


const page = () => {
     const [form] = Form.useForm();
    return (
       <section className="mt-16 ml-8 bg-white h-screen rounded-lg shadow-md p-20">
      <div className="w-[40%] ">
        <Form layout='vertical' form={form} className="mt-8">  
           
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
               style={{padding:'10px'}}
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
                style={{padding:'10px'}}
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
                style={{padding:'10px'}}
              />
            </Form.Item>
        

        <div className='flex justify-end'>
              <Link href='/forget-password' className="text-[13px] text-gray-600 font-semibold mt-2">
            Forget password?
          </Link>
        </div>

          <Button
            htmlType="submit"
            style={{backgroundColor:'#1C2D07',color:'white',padding:'20px', width:'30%'}}
           >
            Update
          </Button>
        </Form>
      </div>
    </section>
    );
};

export default page;