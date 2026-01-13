'use client';

import { useGetSingleUserQuery } from '@/redux/features/user/userApi';
import { Input, Tag, Avatar } from 'antd';
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import Image from 'next/image';
import Link from 'next/link';

const UserDetailsPage = () => {
  const { details } = useParams();
  const { data } = useGetSingleUserQuery(details);
  const queryData = useSearchParams()
  const path = queryData.get('path');
  
 
 

  return (
   <section className="bg-white text-black mt-20 ml-5 w-[90%] shadow-lg rounded-lg p-6 min-h-screen">

  {/* PROFILE HEADER (card er vitorei, start position e) */}
  <div className="flex items-center gap-4 mb-8">
    <Link href={path as string}>
    <GoArrowLeft className="size-6 cursor-pointer" />
    </Link>

    <Image
      width={44}
      height={44}
      className="rounded-full ring-1"
      src={data?.data?.profileImage}
      alt="profile"
    />

    <div>
      <h2 className="text-lg font-semibold">
        {data?.data?.fullName}
      </h2>

      {data?.data?.isActive ? (
        <Tag color="green">Active</Tag>
      ) : (
        <Tag>Offline</Tag>
      )}
    </div>
  </div>

  {/* CARD BODY */}
  <div className="max-w-[500px]">

    {/* Full Name */}
    <div className="mb-4">
      <label className="text-sm text-gray-500">Name</label>
      <input
        readOnly
        value={data?.data?.fullName || ''}
        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 shadow-sm"
      />
    </div>

    {/* User Type */}
    <div className="mb-4">
      <label className="text-sm text-gray-500">User Type</label>
      <input
        readOnly
        value={data?.data?.planType}
        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200  shadow-sm"
      />
    </div>
 

    {/* Email */}
    <div className="mb-4">
      <label className="text-sm text-gray-500">Email</label>
      <input
        readOnly
        value={data?.data?.email || ''}
        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 shadow-sm"
      />
    </div>

    {/* Contact */}
    <div>
      <label className="text-sm text-gray-500">Contact</label>
      <input
        readOnly
        value={data?.data?.phoneNumber || ''}
        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 shadow-sm"
      />
    </div>

  </div>
</section>

  );
};

export default UserDetailsPage;
