import { Button, Form, Input, Modal } from 'antd';
import React from 'react';
import type { FormProps } from 'antd';
import '@ant-design/v5-patch-for-react-19';

const UserModal = ({ isOpen, setOpen }: { isOpen: boolean, setOpen: any }) => {

    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };


    type FieldType = {
        name?: string;
        email: string;
        password: string;
        contact: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Modal
            open={isOpen}
            onOk={handleOk}
            width={700}
            onCancel={handleCancel}
            footer={[]}
        >
            <div className='mt-6 w-[70%] mx-auto'>
                <Form
                    layout='vertical'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item<FieldType>
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ backgroundColor: '#fafafa', padding: '6px' }} placeholder='type name' />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ backgroundColor: '#fafafa', padding: '6px' }} placeholder='type email' />
                    </Form.Item>


                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password style={{ backgroundColor: '#fafafa', padding: '6px' }} placeholder='type name' />
                    </Form.Item>


                    <Form.Item<FieldType>
                        label="Contact"
                        name="contact"
                        rules={[{ required: true, message: 'Please input your contact number!' }]}
                    >
                        <Input style={{ backgroundColor: '#fafafa', padding: '6px' }} placeholder='type contact number' />
                    </Form.Item>

                    <Form.Item label={null}>
                        <div className='flex items-end justify-end'>
                            <Button style={{ backgroundColor: '#1C2D07', width: '180px', height: '40px', color: '#cfd1d0', }} onClick={handleOk}>
                                Create User
                            </Button>
                        </div>

                    </Form.Item>
                </Form>
            </div>
        </Modal>
    );
};

export default UserModal;