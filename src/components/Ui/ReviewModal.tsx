import { Modal, Rate } from 'antd';
import React from 'react';
import type { FormProps } from 'antd';
import '@ant-design/v5-patch-for-react-19';

const ReviewModal = ({data, isOpen, setOpen }: {data:any, isOpen: boolean, setOpen: any }) => {

    
    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <Modal
            open={isOpen}
            onOk={handleOk}
            width={700}
            onCancel={handleCancel}
            footer={[]}
        >
            <div className='mt-10 w-[95%] mx-auto'>
                <div className='flex items-center justify-between'>
                     <p className='font-semibold'>Review</p>
                     <Rate allowHalf defaultValue={data?.rating } />
                </div>
           
             <p className='h-[300px] overflow-auto bg-gray-100 p-4 rounded-lg mt-2'>{data?.comment}</p>
            </div>
        </Modal>
    );
};

export default ReviewModal;