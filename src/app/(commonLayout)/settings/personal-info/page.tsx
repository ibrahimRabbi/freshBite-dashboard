'use client'
import { useGetMyProfileQuery, useSingleImageUploadMutation, useUpdateProfileMutation } from '@/redux/features/user/userApi';
import { Button, Form, Image, Input } from 'antd';
import { setCookie } from 'cookies-next/client';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { TbCameraPlus } from 'react-icons/tb';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface FormData {
    fullName: string;
    email: string;
    phoneNumber: string;
    profileImage?: string;
}

const EditProfileForm: React.FC = () => {
    const [form] = Form.useForm<FormData>();
    const [isediting, setIsEditing] = useState(false);
    const { data, refetch } = useGetMyProfileQuery(undefined);
    const [updatingProfile, { isLoading }] = useUpdateProfileMutation();
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imageUploading, {isLoading:imageLoading}] = useSingleImageUploadMutation();
    const router = useRouter();



    useEffect(() => {
        if (data?.data) {
            form.setFieldsValue({
                fullName: data.data.fullName,
                email: data.data.email,
                phoneNumber: data.data.phoneNumber,
            });
        }
    }, [data, form])



    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
            setImageFile(file);
        }
    };


    const handleSubmit = async (values: FormData) => {
        try {
            const formData = new FormData();
            if (imageFile) {
                formData.append('image', imageFile);
                const uploadResult = await imageUploading(formData).unwrap();
                values.profileImage = uploadResult?.url;
            }

            const updating = await updatingProfile(values).unwrap();

            if (updating.status === 200) {
                toast.success('Profile updated successfully!');
                setCookie('token', updating?.token);
                refetch();
                setIsEditing(false);
            }
        } catch (error) {
            toast.error('Failed to update profile.');
            console.error(error);
        }
    };

    return (
        <section className="mt-20 bg-white p-12 rounded-xl h-screen">
            {/* Back Button */}
            <div className="flex items-center mb-6 -ml-4">
                <button 
                    onClick={() => router.push('/settings')} 
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="text-lg font-medium">Back</span>
                </button>
            </div>

            <div className="flex justify-start items-start gap-5">
                {/* Profile Section */}
                <div className="bg-[#F7F7F7] p-10 rounded-lg text-center pt-12 mt-4">

                    <div className="relative">
                        <label htmlFor="profileImageInput" className="cursor-pointer">
                            <TbCameraPlus onClick={()=>setIsEditing(true)} className="absolute top-18 right-4 z-20 text-3xl bg-[#dddada] p-1 rounded-2xl text-[#5f5f5f]" />
                            <input
                                type="file"
                                hidden
                                id="profileImageInput"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </label>

                        <Image
                            width={100}
                            height={100}
                            className="rounded-full object-cover ring-1"
                            preview={{ mask: false }}
                            src={previewImage || data?.data?.profileImage}
                            alt="profile"
                        />
                    </div>

                    <div className="mt-6">
                        <p className="text-sm font-medium uppercase text-gray-400">{data?.data?.role}</p>
                        <p className="text-xl text-[#4d4c4c]">{data?.data?.fullName}</p>
                    </div>
                </div>

                {/* Form Section */}
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                >
                    <Form.Item label="Full name" name="fullName">
                        <Input
                            disabled={!isediting}
                            style={{ width: '720px', padding: '12px', backgroundColor: '#F7F7F7' }}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ type: 'email', message: 'Please enter a valid email!' }]}
                    >
                        <Input
                            disabled={!isediting}
                            style={{ width: '720px', padding: '12px', backgroundColor: '#F7F7F7' }}
                        />
                    </Form.Item>

                    <Form.Item label="Contact number" name="phoneNumber">
                        <Input
                            disabled={!isediting}
                            style={{ width: '720px', padding: '12px', backgroundColor: '#F7F7F7' }}
                        />
                    </Form.Item>

                    {/* Buttons */}
                    <Form.Item>
                        <div className="flex justify-end gap-3">
                            {isediting && (
                                <button
                                    type="submit"
                                    disabled={isLoading || imageLoading}
                                    className={`bg-[#1C2D07] text-white px-6 py-2 cursor-pointer transition-colors flex items-center gap-2 ${isLoading || imageLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#162005]'}`}>
                                    {isLoading || imageLoading ? (
                                        <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    ): ''}
                                    Save Changes
                                </button>
                            )}

                            {!isediting && (
                                <button
                                    type="button"
                                    className="bg-[#1C2D07] text-white px-6 py-2 cursor-pointer hover:bg-[#162005]"
                                    onClick={() => setIsEditing(true)}
                                >
                                    Edit Profile
                                </button>
                            )}
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </section>
    );
};

export default EditProfileForm;
