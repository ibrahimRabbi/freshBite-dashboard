'use client'
import React, { useState, useEffect } from 'react'

import { Button, Form, Input } from 'antd'
import { useCreateSkillMutation, useGetSingleSkillQuery, useSingleUploadMutation, useUpdateSkillMutation, } from '@/redux/features/recipe/recipeApi'
import toast from 'react-hot-toast'
import ImageAndVideoUpload from '../../../_components/ImageAndVideoUpload'
import { useParams } from 'next/navigation'




type TskillForm = {
    cover: string
    video: string
    skillTitle: string
    description: string
}

const page = () => {
    const [form] = Form.useForm()
    const [videoLink, setVideoLink] = useState('')
    const [imageFile, setImageFile] = useState('')
    const [imageUploading, { isLoading: isImageUploading }] = useSingleUploadMutation()
    const [updateSkill, { isLoading: isCreating }] = useUpdateSkillMutation()
    const { skillsId } = useParams()
    const { data, refetch, isLoading } = useGetSingleSkillQuery(skillsId)

    // Set form values and media links when data is loaded
    useEffect(() => {
        if (data?.data) {
            form.setFieldsValue({
                skillTitle: data.data.skillTitle,
                description: data.data.description,
            })

            // Set the video and image URLs
            setVideoLink(data.data.video)
            // Note: imageFile is for the file object, not URL
            // If you need to display the existing image, you might need to pass the URL
            // to your ImageAndVideoUpload component separately
        }
    }, [data, form])


    const onFinish = async (values: any) => {
        if (!imageFile && !data?.data?.cover) {
            toast.error('Please select an image!')
            return
        }

        if (!videoLink) {
            toast.error('Please select a video!')
            return
        }

        try {
            let coverUrl = data?.data?.cover 
            if (imageFile) {
                const formData = new FormData()
                formData.append('image', imageFile)
                const uploading = await imageUploading(formData).unwrap()
                if (uploading?.url) {
                    coverUrl = uploading.url
                }
            }

            if (coverUrl) {
                const skillData: TskillForm = {
                    cover: coverUrl,
                    video: videoLink,
                    ...values,
                }

                const creatingSkill = await updateSkill({ skillsId, skillData }).unwrap()

                if (creatingSkill?.status === 200) {
                    toast.success(creatingSkill?.message)
                    setTimeout(() => {
                        refetch()
                    }, 1000)
                }
            }
        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong!')
        }
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }


    const isButtonLoading = isImageUploading || isCreating

    if (isLoading) {
        return (
            <section className="bg-[#FAF9F6] w-[95%] mx-auto mt-24 p-20">
                <div className="w-[60%] text-center">
                    Loading...
                </div>
            </section>
        )
    }

    return (
        <section className="bg-[#FAF9F6] w-[95%] mx-auto mt-24 p-20">
            <div className="w-[60%]">
                <ImageAndVideoUpload
                    setImageFile={setImageFile}
                    setVideoLink={setVideoLink}
                    initialImage={data?.data?.cover}
                    initialVideo={data?.data?.video}
                />

                <div className="mt-7">
                    <Form
                        form={form}
                        name="basic"
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Skill Name"
                            name="skillTitle"
                            rules={[{ required: true, message: 'Please input skill name!' }]}
                        >
                            <Input style={{ padding: '10px' }} placeholder="type skill name" />
                        </Form.Item>

                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[{ required: true, message: 'Please input description!' }]}
                        >
                            <Input.TextArea rows={10} placeholder="type skill description" />
                        </Form.Item>

                        <div className="flex justify-end mt-10">
                            <button
                                type="submit"
                                disabled={isButtonLoading}
                                className="w-48 rounded-4xl cursor-pointer bg-black text-white font-medium py-3 px-4 transition-colors duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isButtonLoading && (
                                    <span className="animate-spin rounded-full border-2 border-white border-t-transparent w-4 h-4"></span>
                                )}
                                {isButtonLoading ? 'updating...' : 'update'}
                            </button>

                        </div>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default page