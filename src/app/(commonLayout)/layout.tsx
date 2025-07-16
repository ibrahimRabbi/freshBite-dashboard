import Navber from '@/components/Navber';
import SideBar from '@/components/SideBar';
import React, { ReactNode } from 'react';

const layout = ({ children}: { children: ReactNode}) => {
    return (
        <section className="bg-[#e7e9e6] min-h-screen flex flex-row-reverse">
            <div className="w-[86%]">
                <header className="w-full"><Navber/></header>
                <main className="w-full p-12">{children}</main>
            </div>
            <aside><SideBar/></aside>
        </section>
    );
};

export default layout;