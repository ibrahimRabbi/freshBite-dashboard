'use client'
import React, { useState } from 'react';
import { Avatar, Button, Input, Pagination, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { CiSearch } from 'react-icons/ci';
import { BsPlusLg } from 'react-icons/bs';
import UserModal from '@/components/Ui/UserModal';
import { useDeleteRecipeMutation, useGetAllRecipesQuery } from '@/redux/features/recipe/recipeApi';
import Link from 'next/link';
import toast from 'react-hot-toast';

interface DataType {
  _id: string,
  key: React.Key;
  id: string,
  title: string;
  status: string;
  images: [string]
}


const Recipetable: React.FC = () => {

  const [isOpen, setOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('');
  const limit = 10
  const { data, refetch } = useGetAllRecipesQuery({ page: currentPage, limit, search })
  const [deleteRecipe] = useDeleteRecipeMutation()


  const deleteRecipeHandler = async (id: any) => {
    try {
      const deleting = await deleteRecipe(id).unwrap()
      if (deleting?.status === 200) {
        toast.success(deleting?.message)
        refetch()
      }
    } catch (err: any) {
      toast.error(err?.data?.mwessage)
    }
  }


  const columns: TableColumnsType<DataType> = [
    {
      title: ' Sr.No',
      render: (_text, _record, index) => <p>{index + 1}</p>,
    },
    {
      title: 'Recipe',
      dataIndex: 'RecipeName',
      render: (_, record) => {
        return (
          <div className='flex items-center gap-4'>
            <Avatar style={{ width: '50px', height: '50px' }} className='rounded-full ring-1' src={record?.images[0]} alt='recipe' />
            <p>{record?.title}</p>
          </div>
        )
      },
    },
    {
      title: 'Serving',
      dataIndex: 'serving',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (_, record) => {
        return (
          <div className='flex gap-4'>
            <Link href={`/recipes/edit/${record?._id}`}><Button>Edit</Button></Link>
            <Button onClick={() => deleteRecipeHandler(record?._id)} style={{ backgroundColor: '#A63005', color: 'white', width: '80px' }} >Delete</Button>
          </div>
        )
      },
      className: 'text-center',
    },
  ];

  return (
    <div className='mt-20 w-[90%] mx-auto'>

      <div className='flex items-end justify-between'>
        <h1 className='text-xl font-medium text-gray-700'>Recipe Management</h1>
        <div className='flex items-center gap-4 '>
          <Input onPressEnter={(e) => setSearch((e.target as HTMLInputElement)?.value)} suffix={<CiSearch className='size-5 text-gray-500' />} placeholder='search...' style={{ height: '40px', width: '260px' }} />
          <Link className='cursor-pointer' href='/recipes/create'>
            <Button style={{ backgroundColor: '#1C2D07', fontWeight: 'bolder', width: '150px', height: '40px', color: 'white' }}><BsPlusLg className='text-white text-xl' /> Add Recipe</Button>
          </Link>

        </div>
      </div>
      <div className='mt-5'>
        <Table<DataType>
          columns={columns}
          dataSource={data?.data}
          pagination={false}

        />
      </div>
      <div className='flex justify-center mt-12'>
        <Pagination current={currentPage} onChange={(page) => setCurrentPage(page)} pageSize={limit} total={data?.meta?.totalDocument} />
      </div>

      <UserModal isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};

export default Recipetable;