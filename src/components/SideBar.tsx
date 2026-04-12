'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { HiOutlineBars3, HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { RiUserLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { TbLogout } from 'react-icons/tb';
import logo from '@/assets/logo.png'
import { usePathname, useRouter } from 'next/navigation';
import { Currency, CurrencyIcon, DollarSign } from 'lucide-react';
import Swal from 'sweetalert2'
import { deleteCookie } from 'cookies-next/client';
import toast from 'react-hot-toast';

const SideBar = () => {
    const currentPath = usePathname()
    const navigate = useRouter()
    const [userIsOpen, setUserOpen] = useState(false)
    const [recipeIsOpen, setRecipeOpen] = useState(false)

    const recipeHandler = (path: string) => {
        setRecipeOpen(true)
        setUserOpen(false)
        navigate.push(path)
    }

    const userHandler = (path: string) => {
        setUserOpen(true)
        setRecipeOpen(false)
        navigate.push(path)
    }

    const globalRedirectHandler = (path: string) => {
        setUserOpen(false)
        setRecipeOpen(false)
        navigate.push(path)
    }

    const logoutHandler = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Would you to log out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Log out"
        }).then((result) => {
            if (result.isConfirmed) {
               deleteCookie('token')
               toast.success('logged out')
               navigate.push('/auth/sign-in')
            }
        });
    }

    return (
        <div className='bg-[#FAF9F6] pt-8 fixed left-0 h-full w-[14%] flex flex-col'>
            {/* Header Section */}
            <div className='space-y-4'>
                <Image className='pl-4' alt='LOGO' src={logo} />
                <hr className='text-[#C1D947] w-[80%] mx-auto font-semibold' />
            </div>

            {/* Navigation Section */}
            <div className='flex-1 overflow-y-auto mt-8 px-4 space-y-2'>

                {/* Dashboard */}
                <div onClick={() => globalRedirectHandler('/')} className={`w-full hover:bg-[#1C2D07] hover:p-4 hover:text-white cursor-pointer flex items-center gap-2 text-[17px] duration-100 text-[#4A4A4A] ${currentPath === '/' ? 'bg-[#1C2D07] text-white p-4 rounded-lg' : 'p-4 rounded-lg'}`}>
                    <RxDashboard />
                    <span>Dashboard</span>
                </div>

                {/* User Menu */}
                <ul className={`menu w-full`}>
                    <li key={Math.random()}>
                        <details open={userIsOpen}>
                            <summary className={`flex items-center hover:bg-[#1C2D07] hover:p-4 hover:text-white justify-between w-full cursor-pointer ${currentPath.startsWith('/users') ? 'bg-[#1C2D07] text-white p-4 rounded-lg' : 'text-[#4A4A4A] p-4 rounded-lg'}`}>
                                <div className='flex items-center gap-2 text-[17px]'>
                                    <RiUserLine className='size-5' />
                                    <span>User</span>
                                </div>
                            </summary>
                            <ul className='space-y-2 mt-2 mb-2'>
                                <li onClick={() => userHandler('/users')} className={`w-full cursor-pointer p-2 rounded-md
                                     ${currentPath === '/users' ? 'bg-[#979E8D] text-white' : 'text-[#474747] font-medium hover:bg-[#E8E8E8]'}`}>Users</li>
                                <li onClick={() => userHandler('/users/reviews')} className={`w-full cursor-pointer p-2 rounded-md
                                     ${currentPath === '/users/reviews' ? 'bg-[#979E8D] text-white' : 'text-[#474747] font-medium hover:bg-[#E8E8E8]'}`}>Reviews</li>
                            </ul>
                        </details>
                    </li>
                </ul>

                {/* Recipe Menu */}
                <ul className={`menu w-full`}>
                    <li key={Math.random()}>
                        <details open={recipeIsOpen}>
                            <summary className={`flex items-center justify-between w-full hover:bg-[#1C2D07] hover:p-4 hover:text-white cursor-pointer ${currentPath.startsWith('/recipes') ? 'bg-[#1C2D07] text-white p-4 rounded-lg' : 'text-[#4A4A4A] p-4 rounded-lg'}`}>
                                <div className='flex items-center gap-2 text-[17px]'>
                                    <HiOutlineCalendarDateRange className='size-5' />
                                    <span>Recipe</span>
                                </div>
                            </summary>
                            <ul className='space-y-2 mt-2 mb-2'>
                                <li onClick={() => recipeHandler('/recipes')} className={`w-full cursor-pointer p-2 rounded-md
                                     ${currentPath === '/recipes' ? 'bg-[#979E8D] text-white' : 'text-[#474747] font-medium hover:bg-[#E8E8E8]'}`}>Recipes</li>

                                <li onClick={() => recipeHandler('/recipes/create')} className={`w-full cursor-pointer p-2 rounded-md
                                     ${currentPath === '/recipes/create' ? 'bg-[#979E8D] text-white' : 'text-[#474747] font-medium hover:bg-[#E8E8E8]'}`}>Create Recipe</li>

                                <li onClick={() => recipeHandler('/recipes/kitchen-skill')} className={`w-full cursor-pointer p-2 rounded-md
                                     ${currentPath === '/recipes/kitchen-skill' ? 'bg-[#979E8D] text-white' : 'text-[#474747] font-medium hover:bg-[#E8E8E8]'}`}>Kitchen Skill</li>
                            </ul>
                        </details>
                    </li>
                </ul>

                {/* Subscription */}
                <div onClick={() => globalRedirectHandler('/subscription')} className={`flex w-full hover:bg-[#1C2D07] hover:p-4 hover:text-white cursor-pointer items-center gap-2 text-[17px] duration-100 text-[#4A4A4A] ${currentPath === '/subscription' ? 'bg-[#1C2D07] text-white p-4 rounded-lg' : 'p-4 rounded-lg'}`}>
                    <DollarSign className='size-6' />
                    <span>Subscription</span>
                </div>

                {/* Settings */}
                <div onClick={() => globalRedirectHandler('/settings')} className={`flex w-full cursor-pointer hover:bg-[#1C2D07] hover:p-4 hover:text-white items-center gap-2 text-[17px] duration-100 text-[#4A4A4A] ${currentPath === '/settings' ? 'bg-[#1C2D07] text-white p-4 rounded-lg' : 'p-4 rounded-lg'}`}>
                    <CiSettings className='size-6' />
                    <span>Settings</span>
                </div>
            </div>

            {/* Footer Section - Logout Button */}
            <div className='p-4 border-t border-[#C1D947]'>
                <div onClick={logoutHandler} className='flex items-center cursor-pointer p-4 gap-2 text-red-600 hover:bg-red-50 rounded-lg duration-100'>
                    <TbLogout className='size-6' />
                    <span className='font-medium'>Log out</span>
                </div>
            </div>
        </div>
    );
};

export default SideBar;