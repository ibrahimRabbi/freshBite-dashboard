'use client'
import Image from 'next/image';
import React from 'react';
import { CiSettings } from 'react-icons/ci';
import { HiOutlineBars3, HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { RiUserLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { TbLogout } from 'react-icons/tb';
import logo from '@/assets/logo.png'
import templeteIcons from '@/assets/icons/templete.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideBar = () => {
    const currentPath = usePathname()
    console.log(currentPath)

    const routeData = [
        {
            pathName: '/',
            icon: <RxDashboard />,
            title: 'Dashboard'
        },

        {
            pathName: '/users',
            icon: <RiUserLine className='size-5' />,
            title: 'Users'
        },

        {
            pathName: '/recipes',
            icon: <HiOutlineCalendarDateRange className='size-5' />,
            title: 'Recipes'
        },
        {
            pathName: '/category',
            icon: <HiOutlineBars3 className='size-6' />,
            title: 'Categories'
        },
        {
            pathName: '/settings',
            icon:  <CiSettings className='size-6' />,
            title: 'Settings'
        },
    ]


    return (
        <div className='bg-[#FAF9F6] pt-8 h-full'>
            <div className='space-y-12'>
                <Image className='pl-4' alt='LOGO' src={logo} />
                <hr className='text-[#C1D947] w-[80%] mx-auto font-semibold' />
            </div>

            <div className='mt-16 space-y-16 font-medium'>
                {
                    routeData.map(routes => {
                        return (
                            <Link href={{ pathname: routes?.pathName }} className={`flex pl-12 items-center gap-2 text-[17px] duration-100 text-[#4A4A4A] ${currentPath === routes?.pathName ? 'bg-[#1C2D07] text-white p-4' : ''}`}>
                                {routes?.icon}
                                <span>{routes?.title}</span>
                            </Link>
                        )
                    })
                }
                <div className='flex items-center pl-12 gap-2 mt-28 text-red-600'>
                    <TbLogout className='size-6' />
                    <span>Log out</span>
                </div>

            </div>
        </div>
    );
};

export default SideBar;