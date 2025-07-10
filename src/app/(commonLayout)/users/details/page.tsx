import { Avatar, Button, Image } from 'antd';
import React from 'react';
import { GoArrowLeft } from 'react-icons/go';

const page = () => {
    return (
       <section className="bg-white mt-20 ml-5 w-[90%] shadow-lg rounded-lg p-5 min-h-screen">
      <div className="w-[500px]">
        <div className="flex justify-start items-center gap-4 mt-4">
            <GoArrowLeft className='size-6' />
         <Image width={40} height={40} className='rounded-full ring-1' src='https://i.ibb.co/z5QXvMS/2148859448.jpg' alt='profile' />
          <div className="">
          <h2>Ibrahim Rabbi</h2>
          <p className='text-sm'>Active</p>
          </div>
        </div>
        <div className="p-[8px] mt-10">
          <div className="flex justify-between border-b-2 border-zinc-800 py-[16px]">
            <p>Full Name:</p>
            <p>Ibrahim Rabbi</p>
            {/* <p>{username ? username : "N/A"}</p> */}
          </div>

          <div className="flex justify-between border-b-2 border-zinc-800 py-[16px] ">
            <p>Email:</p>
            <p>ibrahimrabbiHere@gmail.com</p>
            {/* <p>{email ? email : "N/A"}</p> */}
          </div>

           <div className="flex justify-between border-b-2 border-zinc-800 py-[16px]">
            <p>Phone Number:</p>
            {/* <p>{phoneNumber ? phoneNumber : "N/A"}</p> */}
            <p>01986711517</p>
          </div>

          <div className="flex justify-between border-b-2 border-zinc-800 py-[16px]">
            <p>Package:</p>
            {/* <p>{dateOfBirth ? birth : "N/A"}</p> */}
            <p>not Applicable</p>
          </div>

          <div className="flex justify-between items-center border-b-2 border-zinc-800 pt-[16px]">
            <p>User Type:</p>
            <p className=" py-[10px] ">
              VIP
              {/* {createdAt ? joiningDate : "N/A"} */}
            </p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default page;