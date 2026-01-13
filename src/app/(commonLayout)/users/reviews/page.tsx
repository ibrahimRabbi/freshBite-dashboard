'use client'
import React, { useState } from 'react';
import { Button, Input, Pagination, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import ReviewModal from '@/components/Ui/ReviewModal';
import { useGetAllRecipeReviewsQuery, useGetSingleReviewsQuery } from '@/redux/features/recipe/recipeApi';

interface DataType {
  key: React.Key;
  _id: string;
  id: string,
  name: string;
  review: string;
  recipeId: {
    images: string[];
    title: string;
  };
  comment: string;
  userId: {
    profileImage: string;
    fullName: string;
  };
}



const ReviewTable: React.FC = () => {

const [isOpen, setOpen] = useState(false)
const [currentPage, setCurrentPage] = useState(1)
const limit = 10
const [search, setSearch] = useState('');
const { data } = useGetAllRecipeReviewsQuery({ page: currentPage, limit,search })
const [singleData, setSingleData] = useState<DataType | null>(null)



  const actionHandler = (data:any) => {
    setOpen(true)
    setSingleData(data)
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'userId',
      render: (_, record) => {
        return (
          <div className='flex items-center gap-4'>
            <Image width={40} height={40} className='rounded-full ring-1 w-10 h-10 object-cover' src={record?.userId?.profileImage} alt='profile' />
            <p>{record?.userId?.fullName}</p>
          </div>
        )
      },
    },
    {
      title: 'Recipe',
      dataIndex: 'recipeId',
      render: (_, record) => {
        return (
          <div className='flex items-center gap-4'>
            <Image width={40} height={40} className='rounded-full ring-1 w-10 h-10 object-cover' src={record?.recipeId?.images[0]} alt='profile' />
            <p>{record?.recipeId?.title}</p>
          </div>
        )
      },
    },
    {
      title: 'Reviews',
      dataIndex: 'comment',
      render: (_, record) => {
        return (
          <p>{record?.comment?.slice(0, 70)}....</p>
        )
      }
    },
    {
      title: 'Action',
      render: (_, record) => {
        return <Button onClick={() => actionHandler(record)}>Read More</Button>
      }
    }
  ];

  return (
    <div className='mt-20 w-[90%] mx-auto'>
      <div className='flex items-end justify-end gap-4 '>
        <Input onPressEnter={(e) => setSearch((e.target as HTMLInputElement)?.value)} suffix={<CiSearch className='size-5 text-gray-500' />} placeholder='search...' style={{ height: '40px', width: '280px' }} />
      </div>
      <div className='mt-5'>
        <Table<DataType>
          columns={columns}
          dataSource={data?.data?.map((review: any) => ({
            ...review,
            key: review._id || review.id,
          }))}
          pagination={false}
        />
        <div className='flex justify-center mt-12 '>
          <Pagination current={currentPage} onChange={(page) => setCurrentPage(page)} pageSize={limit} total={data?.meta?.totalDocument} />
        </div>
      </div>
      <ReviewModal data={singleData} isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};

export default ReviewTable;