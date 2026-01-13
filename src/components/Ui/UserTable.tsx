'use client'
import React, { useState } from 'react';
import { Button, Table, Tag } from 'antd';
import type { TableColumnsType, } from 'antd';
import { PiCrownCross, PiUser, PiUsersThreeLight } from 'react-icons/pi';

import UserModal from '@/components/Ui/UserModal';
import { useGetAllUserQuery, useRemoveUserMutation } from '@/redux/features/user/userApi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import toast from 'react-hot-toast';

interface DataType {
    key: React.Key;
    _id: string;
    id: string,
    name: string;
    fullName: string;
    status: 'active' | 'offline';
    subscription: string;
    profileImage: string;
    slug_id: string;
    isActive: boolean;
    planType: string;
}

interface UserTableComponentProps {
    data: any;
    refetch:any
}





// // rowSelection object indicates the need for row selection
// const rowSelection: TableProps<DataType>['rowSelection'] = {
//   onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
//     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//   },
//   getCheckboxProps: (record: DataType) => ({
//     disabled: record.name === 'Disabled User',
//     name: record.name,
//   }),
// };





const UserTableComponent: React.FC<UserTableComponentProps> = ({ data,refetch }) => {

    const [isOpen, setOpen] = useState(false)

    const path = usePathname()
    const [removeUser] = useRemoveUserMutation()


    const removeHandler = async (id: string) => {
        try {
            const removingUser = await removeUser(id).unwrap()
            if (removingUser?.status === 200) {
                toast.success(removingUser?.message)
                refetch()
            }
        } catch (err: any) {
            toast.error(err?.data?.message || 'something went wrong')
        }
    }

    const columns: TableColumnsType<DataType> = [
        {
            title: 'ID',
            dataIndex: 'slug_id',
            key: 'slug_id',
            width: 100,
            render: (text: string) => <p className="text-sm">{text}</p>,
        },
        {
            title: 'Name',
            dataIndex: 'fullName',
            key: 'fullName',
            width: 200,
            render: (_, record) => (
                <div className="flex items-center gap-3">
                    <img
                        className="rounded-full ring-1 w-10 h-10 object-cover"
                        src={record.profileImage}
                        alt="profile"
                    />
                    <p className="text-sm font-medium">{record.fullName}</p>
                </div>
            ),
        },
        {
            title: 'Status',
            dataIndex: 'isActive',
            key: 'status',
            align: 'center',
            width: 120,
            render: (_, record) => (
                <div>
                    {
                        record.isActive ? <Tag color='green'>Active</Tag> : <Tag >Off line</Tag>
                    }
                </div>
            ),
        },
        {
            title: 'Subscription',
            dataIndex: 'planType',
            key: 'planType',
            align: 'center',
            width: 150,
            render: (_, record) => (
                <div className="flex items-center justify-center gap-3">
                    <div>
                        {record.planType === 'family' ? (
                            <PiUsersThreeLight className="text-xl" />
                        ) : record.planType === 'premium' ? (
                            <PiCrownCross className="text-xl" />
                        ) : (
                            <PiUser className="text-xl" />
                        )}
                    </div>
                    <span className="text-sm capitalize">{record.planType}</span>
                </div>
            ),
        },
        {
            title: <div className="text-center">Actions</div>,
            dataIndex: 'actions',
            key: 'actions',
            align: 'center',
            width: 180,
            render: (_, record) => (
                <div className="flex justify-center gap-3">
                    <Link href={`/users/${record?._id}?path=${path}`}><Button size="small">Details</Button></Link>
                    <Button
                        onClick={() => removeHandler(record?._id)}
                        size="small"
                        style={{ backgroundColor: '#A63005', color: 'white', width: '80px' }}
                    >
                        Remove
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div className='w-full'>

            <div className='mt-5'>
                <Table<DataType>
                    columns={columns}
                    dataSource={data?.data?.map((user: any) => ({
                        ...user,
                        key: user._id || user.id,
                    }))}
                    pagination={false}
                />

                {/* <div className='flex justify-center mt-12'>
          <Pagination current={currentPage} onChange={(page) => setCurrentPage(page)} total={50} />
        </div> */}
            </div>
            <UserModal isOpen={isOpen} setOpen={setOpen} />
        </div>
    );
};

export default UserTableComponent;