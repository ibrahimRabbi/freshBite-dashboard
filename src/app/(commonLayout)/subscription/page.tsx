'use client'
import React, { useEffect, useState } from 'react';
import { Pencil, Trash2, Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from 'antd';
import { BsPlusLg } from 'react-icons/bs';
import { useGetAllSubscriptionQuery, useRemoveSubscriptionMutation } from '@/redux/features/subscription/subcApi';
import toast from 'react-hot-toast';

const SubscriptionCard = () => {


    const { data, refetch } = useGetAllSubscriptionQuery({})
    const [deleteSubcription] = useRemoveSubscriptionMutation()


   
    const handleDelete = async (id: string) => {
        try {
            const deleting = await deleteSubcription(id).unwrap()
            if (deleting?.status === 200) {
                toast.success(deleting?.message)
                refetch()
            }
        } catch (err: any) {
            toast.error(err?.data?.message)
        }

    };

    const getDurationText = (days: number) => {
        if (days === 7) return '7 Days';
        if (days === 30) return '1 Month';
        if (days === 90) return '3 Months';
        if (days === 365) return '1 Year';
        return `${days} Days`;
    };

    useEffect(() => {
        refetch()
    }, [refetch])

    return (
        <div className="min-h-screen bg-gradient-to-br mt-20 from-gray-50 to-gray-100 p-8">
            <div className='w-full max-w-7xl mx-auto'>
                <div className="mb-8 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Subscriptions</h1>
                    <Link className='cursor-pointer' href='/subscription/create-subscription'>
                        <button className='bg-[#1C2D07] text-white font-medium flex items-center justify-center gap-1 p-2 rounded-lg cursor-pointer text-sm'>
                            <BsPlusLg className='text-white text-xl' />
                            Create subscription
                        </button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data?.data?.map((subscription: any) => (
                        <div
                            key={subscription._id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
                        >
                            {/* Header */}
                            <div className={` text-gray-700 p-5`}>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-2xl font-bold capitalize mb-1">
                                            {subscription.plan}
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-bold">${subscription.price}</span>
                                    <span className="ml-2">/ {getDurationText(subscription.duration).toLowerCase()}</span>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="p-6 flex-grow">
                                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                    Features
                                </h4>
                                <ul className="space-y-3">
                                    {subscription.features.map((feature: string, index: number) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className={`w-5 h-5 rounded-full bg-gradient-to-r from-gray-500 to-gray-700 flex items-center justify-center`}>
                                                    <Check className="w-3 h-3 text-white" />
                                                </div>
                                            </div>
                                            <span className="text-gray-700 text-sm leading-relaxed">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Footer - Fixed at bottom */}
                            <div className="px-6 pb-6 mt-auto">
                                <div className="flex items-center justify-center gap-4">
                                   <Link href={`/subscription/edit/${subscription._id}`}>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 cursor-pointer px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg text-white"
                                        title="Edit"
                                    >
                                        <Pencil className="w-4 h-4" />
                                        <span className="text-sm font-medium">Edit</span>
                                    </button>
                                   </Link>
                                    <button
                                        onClick={() => handleDelete(subscription._id)}
                                        className="bg-red-500 hover:bg-red-600 px-3 py-2 cursor-pointer rounded-lg transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg text-white"
                                        title="Delete"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                        <span className="text-sm font-medium">Delete</span>
                                    </button>
                                </div>
                                <p className="text-xs text-gray-400 text-center mt-3">
                                    Created: {new Date(subscription.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubscriptionCard;