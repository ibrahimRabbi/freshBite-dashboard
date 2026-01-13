'use client'
import { useVideoUploadMutation } from '@/redux/features/recipe/recipeApi'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { LuFileImage, LuFileVideo } from 'react-icons/lu'

const ImageUpload = ({ setVideoLink, setImageFile }: { setVideoLink: any, setImageFile: any }) => {
    const [imagePreview, setImagePreview] = useState<string | null>(null)
    const [videoPreview, setVideoPreview] = useState<string | null>(null)
    const [uploadVideo, { isLoading }] = useVideoUploadMutation()


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setImagePreview(URL.createObjectURL(file))
            setImageFile(file)
        }
    }

    const handleVideoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setVideoPreview(URL.createObjectURL(file))
            const formData = new FormData()
            formData.append('skillVideos', file)
            try {
                const uploading = await uploadVideo(formData).unwrap()
                if (uploading.status === 200) {
                    setVideoLink(uploading?.url)
                }
            } catch (err: any) {

                toast.error(err?.data?.message)
            }
        }
    }

    return (
        <div className="border-2 border-dashed p-6 border-zinc-300 rounded-md">
            <div className="flex items-center gap-5">

                {/* IMAGE */}
                <label
                    htmlFor="cover"
                    className="relative cursor-pointer bg-white border border-dashed border-gray-300 rounded-xl w-40 h-40 overflow-hidden"
                >
                    {imagePreview ? (
                        <img
                            src={imagePreview}
                            alt="preview"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <LuFileImage className="size-7 text-zinc-600" />
                            <div className="text-zinc-600 text-sm mt-2">add cover</div>
                        </div>
                    )}

                    <input
                        type="file"
                        id="cover"
                        hidden
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </label>

                {/* VIDEO */}
                <label
                    htmlFor="video"
                    className="relative cursor-pointer bg-white border border-dashed border-gray-300 rounded-xl w-40 h-40 overflow-hidden"
                >
                    {videoPreview ? (
                        <video
                            src={videoPreview}
                            controls
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <LuFileVideo className="size-7 text-zinc-600" />
                            <div className="text-zinc-600 text-sm mt-2">upload video</div>
                        </div>
                    )}

                    <input
                        type="file"
                        id="video"
                        hidden
                        accept="video/*"
                        onChange={handleVideoChange}
                    />

                    {/* Loading Overlay */}
                    {isLoading && (
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center z-10">
                            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-2"></div>
                            <span className="text-white font-semibold">Video uploading...</span>
                        </div>
                    )}
                </label>
            </div>
        </div>
    )
}

export default ImageUpload
