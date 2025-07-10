import { Modal } from 'antd';
import React from 'react';
import type { FormProps } from 'antd';
import '@ant-design/v5-patch-for-react-19';

const ReviewModal = ({ isOpen, setOpen }: { isOpen: boolean, setOpen: any }) => {

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
            <p className='font-semibold'>Review</p>
             <p className='h-[200px] overflow-auto bg-gray-100 p-4 rounded-lg mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, quisquam nulla. Laudantium officiis laboriosam impedit sint, sunt, doloribus eum pariatur ipsam reprehenderit corrupti eos rerum, excepturi perferendis aperiam beatae illo. Deleniti neque mollitia incidunt qui dolore quis in eligendi, animi sapiente iusto ipsum aspernatur? Inventore sequi incidunt tempora, dolorem cumque hic. Eligendi tenetur esse cum, placeat a repudiandae illum culpa cupiditate nisi porro nulla, libero odit reiciendis quas tempore maxime atque officiis ad, delectus quibusdam odio! Corrupti aspernatur soluta deserunt earum tenetur omnis quia odio non tempore veniam eveniet nemo, magni numquam laboriosam accusamus sequi ipsa cupiditate velit, ex dolor fuga harum amet? Illum, aut quam! Eum expedita veritatis excepturi et consequatur quaerat sed esse dolor velit! Dolores, deserunt officia? ariatur ipsam reprehenderit corrupti eos rerum, excepturi perferendis aperiam beatae illo. Deleniti neque mollitia incidunt qui dolore quis in eligendi, animi sapiente iusto ipsum aspernatur? Inventore sequi incidunt tempora, dolorem cumque hic. Eligendi tenetur esse cum, placeat a repudiandae illum culpa cupiditate nisi porro nulla, libero odit reiciendis quas tempore maxime atque officiis ad, delectus quibusdam odio! Corrupti aspernatur soluta deserunt earum tenetur omnis quia odio non tempore veniam eveniet nemo, magni numquam laboriosam accusamus sequi ipsa cupiditate velit, ex dolor fuga harum amet? Illum, aut quam! Eum expedita veritatis excepturi et consequatur quaerat sed esse dolor velit! Dolores, deserunt officia? ariatur ipsam reprehenderit corrupti eos rerum, excepturi perferendis aperiam beatae illo. Deleniti neque mollitia incidunt qui dolore quis in eligendi, animi sapiente iusto ipsum aspernatur? Inventore sequi incidunt tempora, dolorem cumque hic. Eligendi tenetur esse cum, placeat a repudiandae illum culpa cupiditate nisi porro nulla, libero odit reiciendis quas tempore maxime atque officiis ad, delectus quibusdam odio! Corrupti aspernatur soluta deserunt earum tenetur omnis quia odio non tempore veniam eveniet nemo, magni numquam laboriosam accusamus sequi ipsa cupiditate velit, ex dolor fuga harum amet? Illum, aut quam! Eum expedita veritatis excepturi et consequatur quaerat sed esse dolor velit! Dolores, deserunt officia?</p>
            </div>
        </Modal>
    );
};

export default ReviewModal;