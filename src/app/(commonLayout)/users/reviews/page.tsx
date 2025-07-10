'use client'
import React, { useState } from 'react';
import { Button, Input, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import ReviewModal from '@/components/Ui/ReviewModal';

interface DataType {
  key: React.Key;
  id: string,
  name: string;
  review: string
}



const data: DataType[] = [
  {
    key: '1',
    id: 'GHQWEZFU',
    name: 'John Brown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsam dolore rem aperiam voluptas, voluptatibus cupiditate eligendi assumenda tempora quisquam.'
  },
  {
    key: '2',
    id: 'GHQWEZFU',
    name: 'Jim Green',
     review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsam dolore rem aperiam voluptas, voluptatibus cupiditate eligendi assumenda tempora quisquam.'
  },

  {
    key: '3',
    id: 'GHQWEZFU',
    name: 'John Brown',
     review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsam dolore rem aperiam voluptas, voluptatibus cupiditate eligendi assumenda tempora quisquam.'
  },
  {
    key: '4',
    id: 'GHQWEZFU',
    name: 'John Brown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsam dolore rem aperiam voluptas, voluptatibus cupiditate eligendi assumenda tempora quisquam.'
  },
  {
    key: '5',
    id: 'GHQWEZFU',
    name: 'John Brown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsam dolore rem aperiam voluptas, voluptatibus cupiditate eligendi assumenda tempora quisquam.'
  },

];

// rowSelection object indicates the need for row selection
const rowSelection: TableProps<DataType>['rowSelection'] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User',
    name: record.name,
  }),
};





const UserTable: React.FC = () => {

  const [isOpen, setOpen] = useState(false)


  const columns: TableColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
    render: (text: string) => <p >{text}</p>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string) => {
      return (
        <div className='flex items-center gap-4'>
          <Image width={40} height={40} className='rounded-full ring-1' src='https://i.ibb.co/z5QXvMS/2148859448.jpg' alt='profile' />
          <p>{text}</p>
        </div>
      )
    },
  },
  {
    title: 'Reviews',
    dataIndex: 'review',
    render: (_,record)=>{
      return(
        <p>{record?.review.slice(0,100)}....</p>
      )
    }
  },
  {
    title: 'Action',
    dataIndex:'read more',
    render : ()=>{
      return <Button onClick={()=>setOpen(true)}>Read More</Button>
    }
  }
];

  return (
    <div className='mt-20 w-[90%] mx-auto'>
      <div className='flex items-end justify-end gap-4 '>
        <Input suffix={<CiSearch className='size-5 text-gray-500' />} placeholder='search...' style={{ height: '40px', width: '280px' }} />
      </div>
      <div className='mt-5'>
        <Table<DataType>
          rowSelection={{ ...rowSelection }}
          columns={columns}
          dataSource={data}
        />
      </div>
      <ReviewModal isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};

export default UserTable;