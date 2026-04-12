"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import JoditEditor from "jodit-react";
import { Button, Form } from "antd";
import toast from "react-hot-toast";
import { useGetSettingDataQuery, useUpdateSettingMutation } from "@/redux/features/settings/settingApi";
import { ArrowLeft } from "lucide-react";

const EditPages = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const query = searchParams.get("query") || "";
     console.log("Query Param:", query);

 
    const [content, setContent] = useState<string>("");

     const { data } = useGetSettingDataQuery(query);
    const [updateSetting, { isLoading }] = useUpdateSettingMutation();

    
    useEffect(() => {
        setContent(data?.data?.value);
    }, [data?.data?.value]);

    
    useEffect(() => {
        if (query) {
            const formattedTitle =
                query.charAt(0).toUpperCase() +
                query.slice(1).replace(/-/g, " ");
            document.title = `Edit ${formattedTitle}`;
        } else {
            document.title = "Edit Page";
        }
    }, [query]);

    

    const handlePost = async () => {
        try {

            const updating = await updateSetting({ value: content, queryField: query }).unwrap();
            console.log("Updating:", updating);

            toast.success("Content updated successfully");

            setTimeout(() => {
                router.push("/settings");
            }, 800);
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="mt-16 ml-8 w-[95%]">
            {/* Back Button */}
            <div className="flex items-center mb-6 -ml-4">
                <button 
                    onClick={() => router.back()} 
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="text-lg font-medium">Back</span>
                </button>
            </div>

            <Form
                layout="vertical"
                onFinish={handlePost}
            >
                {/* Editor */}
                <div className="mt-6">
                    <JoditEditor
                        value={content}
                        onChange={(newContent) => setContent(newContent)}
                    />
                </div>

                {/* Submit Button */}
                <div className="text-right mt-6">
                    <Form.Item>
                        <Button
                            htmlType="submit"
                            style={{
                                backgroundColor: "black",
                                color: "white",
                                height: "50px",
                                width: "200px",
                                border: "none",
                            }}
                            loading={isLoading}
                        >
                            Update
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};

export default EditPages;
