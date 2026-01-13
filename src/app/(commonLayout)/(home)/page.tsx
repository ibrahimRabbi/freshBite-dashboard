'use client'
import React, { ReactNode, useState } from 'react';
import HomeCard from './_components/HomeCard';
import UserEngeggement from './_components/UserEngeggement';
import UserTableComponent from '@/components/Ui/UserTable';
import { useGetAllUserQuery } from '@/redux/features/user/userApi';
import { Pagination } from 'antd';

const page = () => {

  const [currentPage, setCurrentPage] = useState(1)
    const limit = 4
    const { data, isLoading } = useGetAllUserQuery({page:currentPage,limit})


  return (
    <div className='mt-16 w-[90%] mx-auto'>
      <HomeCard />

      <div className='mt-12'>
        <div className='w-full'><UserEngeggement /></div>
        <div className='w-full mt-12'>
          <UserTableComponent data={data} />
          <div className='flex justify-center mt-12'>
            <Pagination pageSize={limit} current={currentPage} onChange={(page) => setCurrentPage(page)} total={data?.meta?.totalDocument || 0} />
          </div>
        </div>
      </div>
      {/* <div className='flex items-start gap-8 mt-8'>
        <div className='w-[45%]'><NewUsersChart /></div>
        <div className='w-[55%]'><MostViewedRecipes /></div>
      </div>
      <div className='flex items-start gap-8 mt-8'>
        <div className='w-[45%]'><TrendingRecipes /></div>
        <div className='w-[55%]'><UserEngeggement /></div>
      </div> */}

    </div>
  );
};

export default page;