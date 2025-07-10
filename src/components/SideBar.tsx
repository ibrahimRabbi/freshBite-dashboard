import Image from 'next/image';
import React from 'react';
import { CiSettings } from 'react-icons/ci';
import { HiOutlineBars3, HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { RiUserLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { TbLogout } from 'react-icons/tb';
import logo from '@/assets/logo.png'
import templeteIcons from '@/assets/icons/templete.png'

const SideBar = () => {
    return (
         <div className='bg-[#FAF9F6] pt-8 h-full'>
               <div className='space-y-12'>
                 <Image className='pl-4' alt='LOGO' src={logo} />
                <hr className='text-[#C1D947] w-[80%] mx-auto font-semibold' />
               </div>

                <div className='pl-12 mt-16 space-y-16 font-medium'>
                    <div className='flex items-center gap-2 text-[17px] text-[#4A4A4A]'>
                        <RxDashboard />
                        <span>Dashboard</span>
                    </div>

                    <div className='flex items-center gap-2 text-[17px] text-[#4A4A4A]'>
                        <RiUserLine className='size-5'/>
                        <span>Users</span>
                    </div>

                    <div className='flex items-center gap-2 text-[17px] text-[#4A4A4A]'>
                        <HiOutlineCalendarDateRange className='size-5'/>
                        <span>Recipes</span>
                    </div>

                    <div className='flex items-center gap-2 text-[17px] text-[#4A4A4A]'>
                        <HiOutlineBars3 className='size-6'/>
                        <span>Categories</span>
                    </div>

                    <div className='flex items-center gap-2 text-[17px] text-[#4A4A4A]'>
                        <Image width={15} src={templeteIcons} alt='templete' />
                        <span>Template</span>
                    </div>

                    <div className='flex items-center gap-2 text-[17px] text-[#4A4A4A]'>
                        <CiSettings className='size-6' />
                        <span>Settings</span>
                    </div>

                    <div className='flex items-center gap-2 mt-28 text-red-600'>
                        <TbLogout className='size-6' />
                        <span>Log out</span>
                    </div>
                </div>
            </div>
    );
};

export default SideBar;