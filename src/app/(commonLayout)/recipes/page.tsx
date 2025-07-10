'use client'
import React, { useState } from 'react';
import { Avatar, Button, Input, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { PiCrownCross, PiCrownSimpleLight, PiUsersThreeLight } from 'react-icons/pi';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { BsPlusLg } from 'react-icons/bs';
import UserModal from '@/components/Ui/UserModal';

interface DataType {
  key: React.Key;
  id: string,
  RecipeName: string;
  status:string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
    render: (text: string) => <p >{text}</p>,
  },
  {
    title: 'Recipe Name',
    dataIndex: 'RecipeName',
    render: (text: string) => {
      return (
        <div className='flex items-center gap-4'>
          <Avatar style={{width:'50px',height:'50px'}} className='rounded-full ring-1' src='https://i.ibb.co/0yLtgsdp/amirali-mirhashemian-sc5s-TPMr-Vfk-unsplash.jpg' alt='recipe' />
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
          <div className='flex gap-4'>
            <Button>Edit</Button>
            <Button style={{ backgroundColor: '#A63005', color: 'white', width: '80px' }} >Delete</Button>
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
    RecipeName: 'vanila cake Recipe',
    status: 'active',
  },
  {
    key: '2',
    id: 'GHQWEZFU',
    RecipeName: 'Scrambled Eggs with Toast',
    status: 'active',
  },

  {
    key: '3',
    id: 'GHQWEZFU',
    RecipeName: 'Omelette with Veggies',
    status: 'active',
    
  },

];

// rowSelection object indicates the need for row selection
const rowSelection: TableProps<DataType>['rowSelection'] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.RecipeName === 'Disabled User', 
    name: record.RecipeName,
  }),
};





const Recipetable: React.FC = () => {

const [isOpen, setOpen] = useState(false)



  return (
    <div className='mt-20 w-[90%] mx-auto'>
      <div className='flex items-end justify-between'>
         <h1 className='text-xl font-semibold'>Recipe Management</h1>
       <div className='flex items-center gap-4 '>
         <Input suffix={<CiSearch className='size-5 text-gray-500' />} placeholder='search...' style={{ height: '40px', width: '260px' }} />
        <Button onClick={()=>setOpen(true)} style={{ backgroundColor: '#1C2D07', fontWeight:'bolder', width: '150px', height: '40px', color: 'white' }}><BsPlusLg className='text-white text-xl'/> Add Recipe</Button>
       </div>
      </div>
      <div className='mt-5'>
        <Table<DataType>
          rowSelection={{ ...rowSelection }}
          columns={columns}
          dataSource={data}
        />
      </div>
      <UserModal isOpen={isOpen} setOpen={setOpen}/>
    </div>
  );
};

export default Recipetable;