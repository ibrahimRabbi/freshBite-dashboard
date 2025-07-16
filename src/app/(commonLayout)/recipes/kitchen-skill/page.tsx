'use client'
import React from 'react';
import ImageUpload from '../create/_components/ImageUpload';
import { Button, Form, Input } from 'antd';


const page = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };




    return (
        <section className='bg-[#FAF9F6] w-[95%] mx-auto mt-24 p-20'>
            <div className='w-[60%]'>
                <ImageUpload />

            <div className='mt-7'>
                <Form
                    name="basic"
                    layout='vertical'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label='Skill Name'
                    >
                        <Input style={{padding:'10px'}} placeholder='type skill name' />
                    </Form.Item>

                     <Form.Item
                        label='Description'
                    >
                        <Input.TextArea rows={10} placeholder='type skill name' />
                    </Form.Item>
                    <div className='flex justify-end mt-10'>
                        <Button style={{backgroundColor:'black', color:'white', padding:'20px'}} className='w-[30%]' htmlType='submit'>Create</Button>
                    </div>
                </Form>
            </div>
            </div>
        </section>
    );
};

export default page;