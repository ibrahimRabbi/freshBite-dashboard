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
            title: 'Users',
            children : [
                {title:'review',pathName:'/users/reviews'}
            ]
        },
        {
            pathName: '/recipes',
            icon: <HiOutlineCalendarDateRange className='size-5' />,
            title: 'Recipes',
            children:[
                {title:'Create recipe',pathName:'/recipes/create'},
                {title:'kitchen Skill',pathName:'/recipes/kitchen-skill'}
            ]
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































// // 'use client'
// // import Image from 'next/image';
// // import React from 'react';
// // import { CiSettings } from 'react-icons/ci';
// // import { HiOutlineBars3, HiOutlineCalendarDateRange } from 'react-icons/hi2';
// // import { RiUserLine } from 'react-icons/ri';
// // import { RxDashboard } from 'react-icons/rx';
// // import { TbLogout } from 'react-icons/tb';
// // import logo from '@/assets/logo.png'
// // import Link from 'next/link';
// // import { usePathname } from 'next/navigation';
// // import { Menu } from 'antd';
// // import type { MenuProps } from 'antd';


// // type MenuItem = Required<MenuProps>['items'][number];


// // const SideBar: React.FC = () => {

// //     const pathname = usePathname();
// //   const selectedKeys = [pathname];





// //     const items: MenuItem[] = [
// //     {
// //         key: '/',
// //         label: <Link href='/' style={{ color: '#4A4A4A', fontSize: '17px' }}>Dashboard</Link>,
// //         icon: <RxDashboard className='size-5' />
// //     },
// //     {
// //         key: '/users',
// //         label: <Link style={{ color: '#4A4A4A', fontSize: '17px' }} href='/users'>Users</Link>,
// //         icon: <RiUserLine className='size-5 text-[#4A4A4A]' />,
// //         children: [
// //             { key: '/users/reviews', label: <Link href='/users/reviews'>Review</Link> },
// //         ],
// //     },

// //     {
// //         key: '/recipes',
// //         label: <Link style={{ color: '#4A4A4A', fontSize: '17px' }} href='/recipes'>Recipes</Link>,
// //         icon: <HiOutlineCalendarDateRange className='size-5' />,
// //         children: [
// //             { key: '9', label: 'Option 9' },
// //             { key: '10', label: 'Option 10' },
// //             { key: '11', label: 'Option 11' },
// //             { key: '12', label: 'Option 12' },
// //         ],
// //     },
// //     {
// //         key: '/category',
// //         label: <Link href='/category' style={{ color:'#4A4A4A', fontSize: '17px', }}>Categories</Link>,
// //         icon: <HiOutlineBars3 className='size-5' />
// //     },
// //     {
// //         key: '/settings',
// //         label: <Link href='/settings' style={{ color: '#4A4A4A', fontSize: '17px' }}>Settings</Link>,
// //         icon: <CiSettings className='size-5' />
// //     }
// // ];

// //     const onClick: MenuProps['onClick'] = (e) => {
// //         console.log('click ', e);
// //     };
   






// //     return (
// //         <aside className='bg-[#FAF9F6] pt-8 h-full'>
// //             <div className='space-y-12'>
// //                 <Image className='pl-4' alt='LOGO' src={logo} />
// //                 <hr className='text-[#C1D947] w-[80%] mx-auto font-semibold' />
// //             </div>
// //             <Menu
// //                 onClick={onClick}
// //                 style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '40px', backgroundColor: '#FAF9F6', }}
               
// //                 selectedKeys={selectedKeys}
// //                 defaultOpenKeys={['sub1']}
// //                 mode="inline"
// //                 items={items}
// //             />

// //             <div className='flex items-center pl-8 gap-2 mt-28 text-red-600'>
// //                 <TbLogout className='size-6' />
// //                 <span>Log out</span>
// //             </div>
// //         </aside>
// //     );
// // };

// // export default SideBar;
