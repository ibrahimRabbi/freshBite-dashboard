'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { HiOutlineBars3, HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { RiUserLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { TbLogout } from 'react-icons/tb';
import logo from '@/assets/logo.png'
import templeteIcons from '@/assets/icons/templete.png'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

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

    const globalRedirectHandler = (path:string)=>{
        setUserOpen(false)
        setRecipeOpen(false)
        navigate.push(path)
    }

    return (
        <div className='bg-[#FAF9F6] pt-8 fixed left-0 h-full w-[14%] '>
            <div className='space-y-12'>
                <Image className='pl-4' alt='LOGO' src={logo} />
                <hr className='text-[#C1D947] w-[80%] mx-auto font-semibold' />
            </div>

            <div className='mt-16 space-y-12 font-medium'>

                <div onClick={()=>globalRedirectHandler('/')} className={`w-[95%] hover:bg-[#1C2D07] hover:p-4 hover:text-white hover:pl-8 cursor-pointer mx-auto flex pl-8 items-center gap-2 text-[17px] duration-100 text-[#4A4A4A] ${currentPath === '/' ? 'bg-[#1C2D07] text-white p-4' : ''}`}>
                    <RxDashboard />
                    <span>Dashboard</span>
                </div>



                <ul className={`menu w-full`}>
                    <li key={Math.random()}>
                        <details open={userIsOpen}>
                            <summary className={`flex items-center hover:bg-[#1C2D07] hover:p-4 hover:text-white hover:pl-8 justify-between w-full pl-8 ${currentPath.startsWith('/users') ? 'bg-[#1C2D07] text-white p-4' : 'text-[#4A4A4A]'}`}>
                                <div className='flex items-center gap-2 text-[17px]'>
                                    <RiUserLine className='size-5' />
                                    <span>User</span>
                                </div>
                            </summary>
                            <ul className='space-y-4 mt-4'>
                                <li onClick={() => userHandler('/users')} className={`w-full cursor-pointer p-2 rounded-sm
                                     ${currentPath === '/users' ? 'bg-[#39580f] text-white' : 'text-[#474747] font-medium pl-6'}`}>Users</li>
                                <li onClick={() => userHandler('/users/reviews')} className={`w-full cursor-pointer p-2 rounded-sm
                                     ${currentPath === '/users/reviews' ? 'bg-[#39580f] text-white' : 'text-[#474747] font-medium pl-6'}`}>Reviews</li>
                            </ul>
                        </details>
                    </li>
                </ul>


                <ul className={`menu w-full`}>
                    <li key={Math.random()}>
                        <details open={recipeIsOpen}>
                            <summary className={`flex items-center justify-between w-full hover:bg-[#1C2D07] hover:p-4 hover:text-white hover:pl-8 pl-8 ${currentPath.startsWith('/recipes') ? 'bg-[#1C2D07] text-white p-4' : 'text-[#4A4A4A]'}`}>
                                <div className='flex items-center gap-2 text-[17px]'>
                                    <HiOutlineCalendarDateRange className='size-5' />
                                    <span>Recipe</span>
                                </div>
                            </summary>
                            <ul className='space-y-4 mt-4'>
                                <li onClick={() => recipeHandler('/recipes')} className={`w-full cursor-pointer p-2 rounded-sm
                                     ${currentPath === '/recipes' ? 'bg-[#39580f] text-white' : 'text-[#474747] font-medium pl-6'}`}>Recipes</li>

                                <li onClick={() => recipeHandler('/recipes/create')} className={`w-full cursor-pointer p-2 rounded-sm
                                     ${currentPath === '/recipes/create' ? 'bg-[#39580f] text-white' : 'text-[#474747] font-medium pl-6'}`}>create recipe</li>

                                <li onClick={() => recipeHandler('/recipes/kitchen-skill')} className={`w-full cursor-pointer p-2 rounded-sm
                                     ${currentPath === '/recipes/kitchen-skill' ? 'bg-[#39580f] text-white' : 'text-[#474747] font-medium pl-6'}`}>kitchen skill</li>
                            </ul>
                        </details>
                    </li>
                </ul>




                <div onClick={()=>globalRedirectHandler('/category')} className={`flex w-[95%] mx-auto hover:bg-[#1C2D07] hover:p-4 hover:text-white hover:pl-8 pl-8 cursor-pointer items-center gap-2 text-[17px] duration-100 text-[#4A4A4A] ${currentPath === '/category' ? 'bg-[#1C2D07] text-white p-4' : ''}`}>
                    <HiOutlineBars3 className='size-6' />
                    <span>Categories</span>
                </div>

                <div onClick={()=>globalRedirectHandler('/settings')} className={`flex w-[95%] mx-auto cursor-pointer hover:bg-[#1C2D07] hover:p-4 hover:text-white hover:pl-8 pl-8 items-center gap-2 text-[17px] duration-100 text-[#4A4A4A] ${currentPath === '/settings' ? 'bg-[#1C2D07] text-white p-4' : ''}`}>
                    <CiSettings className='size-6' />
                    <span>Settings</span>
                </div>

                <div onClick={()=>globalRedirectHandler('/category')} className='flex items-center pl-12 pb-12 gap-2 mt-36 text-red-600'>
                    <TbLogout className='size-6' />
                    <span>Log out</span>
                </div>

            </div>
        </div>
    );
};

export default SideBar;