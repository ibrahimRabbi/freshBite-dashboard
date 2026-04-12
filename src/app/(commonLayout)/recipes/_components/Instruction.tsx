'use client';

import { useState, ChangeEvent } from "react";
import { Plus, X } from "lucide-react";
import { FiImage, FiVideo } from "react-icons/fi";
import {
  useSingleUploadMutation,
  useVideoUploadMutation,
} from "@/redux/features/recipe/recipeApi";

interface Step {
  title: string;
  fileUrl: string | null;
}

const InstructionSteps = ({
  steps,
  setSteps,
}: {
  steps: Step[];
  setSteps: (steps: Step[]) => void;
}) => {
  console.log(steps)
  const [previews, setPreviews] = useState<(File | null)[]>([null]);
  const [uploading, setUploading] = useState<boolean[]>([false]);

  const [uploadImage] = useSingleUploadMutation();
  const [uploadVideo] = useVideoUploadMutation();

  // Update step text
  const updateText = (index: number, value: string) => {
    const copy = [...steps];
    copy[index].title = value;
    setSteps(copy);
  };

  // Upload image / video & preview
  const updatePreview = async (
    index: number,
    e: ChangeEvent<HTMLInputElement>,
    source: "image" | "video"
  ) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) return;

    const previewCopy = [...previews];
    previewCopy[index] = file;
    setPreviews(previewCopy);

    const uploadingCopy = [...uploading];
    uploadingCopy[index] = true;
    setUploading(uploadingCopy);

    try {
      const formData = new FormData();
      let uploadedUrl: string | undefined;

      if (source === "image") {
        formData.append("image", file);
        const res = await uploadImage(formData).unwrap();
        uploadedUrl = res?.url;
      } else {
        formData.append("video", file);
        const res = await uploadVideo(formData).unwrap();
        uploadedUrl = res?.url;
      }

      if (uploadedUrl) {
        const stepsCopy = [...steps];
        stepsCopy[index].fileUrl = uploadedUrl;
        setSteps(stepsCopy);
      }
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      const uploadingCopy = [...uploading];
      uploadingCopy[index] = false;
      setUploading(uploadingCopy);
    }
  };

  // Add new step
  const addStep = () => {
    setSteps([...steps, { title: "", fileUrl: null }]);
    setPreviews([...previews, null]);
    setUploading([...uploading, false]);
  };

// Remove step
const removeStep = (index: number) => {
  setSteps(steps.filter((_, i) => i !== index));
  setPreviews(previews.filter((_, i) => i !== index));
  setUploading(uploading.filter((_, i) => i !== index));
};

  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="relative">

          {/* Remove Step Button */}
          {steps.length > 1 && (
            <button
              type="button"
              onClick={() => removeStep(index)}
              className="absolute top-2 right-2 z-10 bg-white p-1 rounded-full shadow hover:bg-red-50 transition"
            >
              <X className="w-4 h-4 text-red-500" />
            </button>
          )}

          {/* Textarea */}
          <textarea
            rows={10}
            placeholder={`Step ${index + 1}`}
            value={step.title}
            onChange={(e) => updateText(index, e.target.value)}
            className="w-full p-4 pr-12 border border-gray-300 bg-white rounded-lg resize-none focus:outline-none"
          />

          {/* Upload Buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <label className="cursor-pointer text-gray-500 hover:text-gray-700">
              <FiImage size={26} />
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => updatePreview(index, e, "image")}
              />
            </label>

            <label className="cursor-pointer text-gray-500 hover:text-gray-700">
              <FiVideo size={26} />
              <input
                type="file"
                accept="video/*"
                hidden
                onChange={(e) => updatePreview(index, e, "video")}
              />
            </label>
          </div>

          {/* Preview */}
          {(previews[index] || step.fileUrl) && (
            <div className="absolute bottom-4 left-4 w-20 h-20 border border-gray-300 rounded-lg overflow-hidden bg-white">

              {/* Loader */}
              {uploading[index] && (
                <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10">
                  <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
                </div>
              )}

              {/* Preview Image / Video */}
              {previews[index] ? (
                previews[index]!.type.startsWith("video") ? (
                  <video
                    src={URL.createObjectURL(previews[index]!)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={URL.createObjectURL(previews[index]!)}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                )
              ) : (
                step.fileUrl && (
                  step.fileUrl.match(/\.(mp4|webm|ogg)$/) ? (
                    <video
                      src={step.fileUrl}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={step.fileUrl}
                      alt="existing"
                      className="w-full h-full object-cover"
                    />
                  )
                )
              )}
            </div>
          )}
        </div>
      ))}

      {/* Add Step Button */}
      <button
        type="button"
        onClick={addStep}
        className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition"
      >
        <Plus className="w-4 h-4" />
        Add Another Step
      </button>
    </div>
  );
};

export default InstructionSteps;
