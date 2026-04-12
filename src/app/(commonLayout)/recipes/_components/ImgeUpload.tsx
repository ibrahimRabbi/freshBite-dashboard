'use client'
import { useState, useEffect } from 'react'
import { LuFileImage } from 'react-icons/lu'

interface ImageUploadProps {
  setImage1File: (file: File | string) => void
  setImage2File: (file: File | string) => void
  setImage3File: (file: File | string) => void
  setImage4File: (file: File | string) => void
  image1File?: string | File
  image2File?: string | File
  image3File?: string | File
  image4File?: string | File
}

const ImageUpload = ({
  setImage1File,
  setImage2File,
  setImage3File,
  setImage4File,
  image1File,
  image2File,
  image3File,
  image4File,
}: ImageUploadProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [image1Preview, setImage1Preview] = useState<string | null>(null)
  const [image2Preview, setImage2Preview] = useState<string | null>(null)
  const [image3Preview, setImage3Preview] = useState<string | null>(null)


  useEffect(() => {
    if (typeof image1File === 'string' && image1File) setImagePreview(image1File)
    if (typeof image2File === 'string' && image2File) setImage1Preview(image2File)
    if (typeof image3File === 'string' && image3File) setImage2Preview(image3File)
    if (typeof image4File === 'string' && image4File) setImage3Preview(image4File)
  }, [image1File, image2File, image3File, image4File])

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFile: any,
    setPreview: any
  ) => {
    const file = e.target.files?.[0]
    if (file) {
      setPreview(URL.createObjectURL(file))
      setFile(file)
    }
  }

  return (
    <div className="border-2 border-dashed p-6 border-zinc-300 rounded-md">
      <div className="grid grid-cols-4 gap-5">

        {/* IMAGE 0 */}
        <label className="relative cursor-pointer bg-white border border-dashed rounded-xl w-32 h-32 overflow-hidden">
          {imagePreview ? (
            <img src={imagePreview} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <Placeholder />
          )}
          <input type="file" hidden accept="image/*"
            onChange={(e) => handleImageChange(e, setImage1File, setImagePreview)}
          />
        </label>

        {/* IMAGE 1 */}
        <label className="relative cursor-pointer bg-white border border-dashed rounded-xl w-32 h-32 overflow-hidden">
          {image1Preview ? (
            <img src={image1Preview} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <Placeholder />
          )}
          <input type="file" hidden accept="image/*"
            onChange={(e) => handleImageChange(e, setImage2File, setImage1Preview)}
          />
        </label>

        {/* IMAGE 2 */}
        <label className="relative cursor-pointer bg-white border border-dashed rounded-xl w-32 h-32 overflow-hidden">
          {image2Preview ? (
            <img src={image2Preview} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <Placeholder />
          )}
          <input type="file" hidden accept="image/*"
            onChange={(e) => handleImageChange(e, setImage3File, setImage2Preview)}
          />
        </label>

        {/* IMAGE 3 */}
        <label className="relative cursor-pointer bg-white border border-dashed rounded-xl w-32 h-32 overflow-hidden">
          {image3Preview ? (
            <img src={image3Preview} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <Placeholder />
          )}
          <input type="file" hidden accept="image/*"
            onChange={(e) => handleImageChange(e, setImage4File, setImage3Preview)}
          />
        </label>

      </div>
    </div>
  )
}

const Placeholder = () => (
  <div className="flex flex-col items-center justify-center w-full h-full">
    <LuFileImage className="size-7 text-zinc-600" />
    <div className="text-zinc-600 text-sm mt-2">add image</div>
  </div>
)

export default ImageUpload
