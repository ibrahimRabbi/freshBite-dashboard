'use client'
import React, { useState } from 'react'
 
import { Button, Form, Input } from 'antd'
import { useCreateSkillMutation, useSingleUploadMutation } from '@/redux/features/recipe/recipeApi'
import toast from 'react-hot-toast'
import ImageUpload from '../../create/_components/ImageUpload'

type TskillForm = {
    cover: string
    video: string
    skillTitle: string
    description: string
}

const page = () => {
    const [videoLink, setVideoLink] = useState('')
    const [imageFile, setImageFile] = useState('')
    const [imageUploading, { isLoading: isImageUploading }] = useSingleUploadMutation()
    const [createSkill, { isLoading: isCreating }] = useCreateSkillMutation()

    const onFinish = async (values: any) => {
        if (!imageFile) {
            toast.error('Please select an image!')
            return
        }

        if (!videoLink) {
            toast.error('Please select a video!')
            return
        }

        try {
            const formData = new FormData()
            formData.append('image', imageFile)
            const uploading = await imageUploading(formData).unwrap()

            if (uploading?.url) {
                const data: TskillForm = {
                    cover: uploading.url,
                    video: videoLink,
                    ...values,
                }

                const creatingSkill = await createSkill(data).unwrap()

                if (creatingSkill?.status === 200) {
                    toast.success(creatingSkill?.message)
                    window.location.reload()
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

    return (
        <section className="bg-[#FAF9F6] w-[95%] mx-auto mt-24 p-20">
            <div className="w-[60%]">
                <ImageUpload setImageFile={setImageFile} setVideoLink={setVideoLink} />

                <div className="mt-7">
                    <Form
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
                                {isButtonLoading ? 'creating...' : 'create'}
                            </button>

                        </div>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default page
