'use client'
import { Button, Form, Input } from 'antd';
import { EditOutlined } from "@ant-design/icons";
import React from 'react';

// Define the form data type
interface FormData {
    username: string;
    email: string;
    phoneNumber: string;
}

const EditProfileForm: React.FC = () => {
    const [form] = Form.useForm<FormData>();

    const handleSubmit = (values: FormData) => {
        console.log('Form values:', values);
        // Handle form submission here
    };

    return (
        <section className='mt-20 bg-white p-12 rounded-xl h-screen'>
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
                <div className='flex justify-start items-start'>
                    <div>
                        <p>image section</p>
                    </div>

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
                </div>

            </Form>
        </section>
    );
};

export default EditProfileForm;