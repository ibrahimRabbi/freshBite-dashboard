'use client'
import { Button, Form, Image, Input } from 'antd';
import React from 'react';
import { TbCameraPlus } from 'react-icons/tb';
import { useState } from 'react';

// Define the form data type
interface FormData {
    username: string;
    email: string;
    phoneNumber: string;
}

const EditProfileForm: React.FC = () => {
    const [form] = Form.useForm<FormData>();
      const [phone, setPhone] = useState('');


    const handleSubmit = (values: FormData) => {
        console.log('Form values:', values);
        // Handle form submission here
    };


    return (
        <section className='mt-20 bg-white p-12 rounded-xl h-screen'>
            <div className='flex justify-start items-start gap-5'>
                <div className='bg-[#F7F7F7] p-10 rounded-lg text-center pt-12 mt-4'>
                    <div className='relative'>
                        <TbCameraPlus className='absolute top-18 right-4 z-20 text-3xl bg-[#dddada] p-1 rounded-2xl text-[#5f5f5f]' />
                        <Image width={100} height={100} className='rounded-full ring-1' preview={{ mask: false }} src='https://i.ibb.co/z5QXvMS/2148859448.jpg' alt='profile' />
                    </div>
                    <div className='mt-6'>
                        <p className='text-sm font-semibold text-gray-400'>Admin</p>
                        <p className='text-xl text-[#4d4c4c]'>Ibrahim Rabbi</p>
                    </div>
                </div>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    initialValues={{
                        username: 'ibrahim rabbi',
                        email: 'abc@frsh.com',
                        phoneNumber: '019867115127'
                    }}
                >
                    <div>
                        <Form.Item
                            label="Full name"
                            name="username"
                            rules={[]}
                        >
                            <Input style={{ width: '720px', padding: '12px', backgroundColor: '#F7F7F7' }} />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { type: 'email', message: 'Please enter a valid email!' }
                            ]}
                        >
                            <Input style={{ width: '720px', padding: '12px', backgroundColor: '#F7F7F7' }} />
                        </Form.Item>

                        <Form.Item
                            label="Contact number"
                            name="phoneNumber"
                            rules={[]}
                        >
                         
                            <Input style={{ width: '720px', padding: '12px', backgroundColor: '#F7F7F7' }} />
                        </Form.Item>

                        <Form.Item>
                            <div className='flex justify-end mt-10'>
                                <Button style={{ backgroundColor: '#1C2D07', color: 'white' }} htmlType="submit">
                                    Save and Change
                                </Button>
                            </div>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </section>
    );
};

export default EditProfileForm;