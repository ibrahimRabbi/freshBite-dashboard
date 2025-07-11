'use client'
import { Button, Switch, Table, TableColumnsType } from 'antd';
import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { FaRegTrashAlt } from 'react-icons/fa';
import { SlRefresh } from 'react-icons/sl';

const page = () => {
   const currentDate = new Date().getFullYear()
   interface DataType {
      key: React.Key;
      RecipeName: string;
      status: 'active' | 'offline';
      count: number
   }

   const columns: TableColumnsType<DataType> = [
      {
         title: 'S.No',
         render: (text, _, index) => index + 1,
      },
      {
         title: 'Recipe Name',
         dataIndex: 'RecipeName',
         render: (text: string) => {
            return (
               <div className='flex items-center gap-4'>
                  <p>{text}</p>
               </div>
            )
         },
      },
      {
         title: 'Created Recipe',
         dataIndex: 'count',
         render: (text: string) => {
            return (
               <div className='flex items-center gap-4'>
                  <p>{text}</p>
               </div>
            )
         },
      },

       {
         title: 'Add Home Page',
         render: (_) => {
            return (
               <div className='flex items-center gap-4'>
                 <Switch style={{marginLeft:'30px'}} defaultChecked={false} onChange={onChange} />
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
                  <div className='flex items-center gap-4'>
                     <CiEdit className='size-6'/>
                   <FaRegTrashAlt className='text-red-600 size-4'/>
                  </div>

               </div>
            )
         },
         className: 'text-center',
      },
   ];

   const data: DataType[] = [
      {
         key: '1',
         RecipeName: 'vanila cake Recipe',
         status: 'active',
         count: 1
      },
      {
         key: '2',
         RecipeName: 'Scrambled Eggs with Toast',
         status: 'active',
         count: 4
      },

      {
         key: '3',
         RecipeName: 'Omelette with Veggies',
         status: 'active',
         count: 2
      },

   ];

    const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

   return (    
      <section className='mt-24 bg-white p-10 rounded-xl'>
         <div className='flex justify-between items-center'>
            <h1 className='text-xl text-zinc-600'>category management</h1>
            <div className='flex items-center gap-2'>
               <Button style={{ backgroundColor: '#f5f4f2' }}>Data refresh <SlRefresh /></Button>
               <p>{currentDate}</p>
            </div>
         </div>

         <div className='mt-10'>
            <Table<DataType>
               columns={columns}
               dataSource={data}
            />
         </div>

      </section>
   );
};

export default page;