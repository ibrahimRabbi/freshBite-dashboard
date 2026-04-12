'use client'
import { Dropdown, Space } from 'antd';
import { DownOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useGetMyProfileQuery } from '@/redux/features/user/userApi';
import Link from 'next/link';





const Navber = () => {

  const { data } = useGetMyProfileQuery({})



  return (
    <nav className='bg-white text-[#474545] flex items-center justify-between px-12 py-3 w-[87%] fixed shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] z-50'>
      <div className=''>
        <p className='text-2xl font-semibold'>Dashboard</p>
      </div>
      <Link href='/settings/personal-info' className='flex items-center gap-4'>
        <img className='rounded-full h-12 w-12 object-cover' src={data?.data?.profileImage} alt='profile' />
        <div className='font-medium'>{data?.data?.fullName}</div>
      </Link>
    </nav>
  );
};

export default Navber;