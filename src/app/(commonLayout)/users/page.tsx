'use client'
import React, { useState } from 'react';
import { Button, Input, Pagination, Table } from 'antd';
import { CiSearch } from 'react-icons/ci';
import { BsPlusLg } from 'react-icons/bs';
import UserModal from '@/components/Ui/UserModal';
import UserTableComponent from '@/components/Ui/UserTable';
import { useGetAllUserQuery } from '@/redux/features/user/userApi';



const UserTable: React.FC = () => {

  const [isOpen, setOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const limit = 10
  const [search, setSearch] = useState('');
  const { data, isLoading, refetch } = useGetAllUserQuery({ page: currentPage, limit,search })

  if (isLoading) {
    return <div className='flex items-center justify-center'>Loading...</div>
  }

  return (
    <div className='mt-20 w-[90%] mx-auto'>
      <div className='flex items-end justify-end gap-4'>
        <Input onPressEnter={(e) => setSearch((e.target as HTMLInputElement)?.value)} suffix={<CiSearch className='size-5 text-gray-500' />} placeholder='search...' style={{ height: '40px', width: '260px' }} />
        <Button onClick={() => setOpen(true)} style={{ backgroundColor: '#1C2D07', width: '150px', height: '40px', color: '#cfd1d0' }}><BsPlusLg/> Add User</Button>
      </div>
      <div className='mt-10'>
        <UserTableComponent refetch={refetch} data={data} />
        <div className='flex justify-center mt-12'>
          <Pagination pageSize={limit} current={currentPage} onChange={(page) => setCurrentPage(page)} total={data?.meta?.totalDocument || 0} />
        </div>
      </div>
      <UserModal isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};

export default UserTable;