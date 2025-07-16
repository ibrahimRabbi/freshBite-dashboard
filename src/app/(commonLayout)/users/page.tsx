'use client'
import React, { useState } from 'react';
import { Button, Input, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { PiCrownCross, PiCrownSimpleLight, PiUsersThreeLight } from 'react-icons/pi';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { BsPlusLg } from 'react-icons/bs';
import UserModal from '@/components/Ui/UserModal';

interface DataType {
  key: React.Key;
  id: string,
  name: string;
  status: 'active' | 'offline';
  role: string
}

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
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    render: (_, record) => {
      return (
        <div className='flex items-center gap-6'>
          <div className='flex gap-4'>
            <Button>Details</Button>
            <Button style={{ backgroundColor: '#A63005', color: 'white', width: '80px' }} >Ban</Button>
          </div>
          <div>{record?.role === 'admin' ? <PiCrownSimpleLight className='size-6' /> :
           record?.role === 'family' ? <PiUsersThreeLight className='size-7' /> :
            <PiCrownCross className='size-6' />}</div>
        </div>
      )
    },
    className: 'text-center',
  },
];

const data: DataType[] = [
  {
    key: '1',
    id: 'GHQWEZFU',
    name: 'John Brown',
    status: 'active',
    role: 'admin',
  },
  {
    key: '2',
    id: 'GHQWEZFU',
    name: 'Jim Green',
    status: 'active',
    role: 'vip'
  },

  {
    key: '3',
    id: 'GHQWEZFU',
    name: 'John Brown',
    status: 'active',
    role: 'family',
  },
  {
    key: '4',
    id: 'GHQWEZFU',
    name: 'John Brown',
    status: 'active',
    role: 'admin',
  },
  {
    key: '5',
    id: 'GHQWEZFU',
    name: 'John Brown',
    status: 'active',
    role: 'vip',
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



  return (
    <div className='mt-20 w-[90%] mx-auto'>
      <div className='flex items-end justify-end gap-4 '>
        <Input suffix={<CiSearch className='size-5 text-gray-500' />} placeholder='search...' style={{ height: '40px', width: '260px' }} />
        <Button onClick={()=>setOpen(true)} style={{ backgroundColor: '#1C2D07', width: '150px', height: '40px', color: '#cfd1d0' }}><BsPlusLg /> Add User</Button>
      </div>
      <div className='mt-5'>
        <Table<DataType>
          rowSelection={{ ...rowSelection }}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
      <UserModal isOpen={isOpen} setOpen={setOpen}/>
    </div>
  );
};

export default UserTable;