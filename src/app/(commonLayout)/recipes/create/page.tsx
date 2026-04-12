'use client';

import { Button, Form, Input, Select } from 'antd';
import React, { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import ImageUpload from '../_components/ImgeUpload';
import { useCreateRecipeMutation, useMultipleUploadMutation } from '@/redux/features/recipe/recipeApi';
import IngredientField from '../_components/IngrediantFiled';
import NutritionField from '../_components/NutrationField';
import InstructionSteps from '../_components/Instruction';
import SkillComponent from '../_components/SkillComponent';
import toast from 'react-hot-toast';

interface Step {
    title: string;
    fileUrl: string | null;
}

interface Trecipe {
    title: string;
    description: string;
    images: string[];
    allergens: string[];
    coocking_mode: 'everyday' | 'emergency' | 'meal prep';
    tags: string[];
    serving: number;
    ingredients: [];
    nutritionValue: [];
    instruction: [];
    required_skill: [];
    time: {};
}

const CreateRecipe = () => {


    const [image1File, setImage1File] = useState<string | File>('');
    const [image2File, setImage2File] = useState<string | File>('');
    const [image3File, setImage3File] = useState<string | File>('');
    const [image4File, setImage4File] = useState<string | File>('');
    const [skills, setSkill] = useState<string[]>([]);
    const [multipleUpload] = useMultipleUploadMutation();
    const [createRecipe] = useCreateRecipeMutation();

    const [ingredients, setIngredients] = useState([{ id: 1, name: '', categories: '', value: '', unit: '', householdValue: '', houseHoldUnit: ''}]);
    const [nutritions, setNutritions] = useState([{ id: 1, name: '', value: '', unit: '' }]);
    const [steps, setSteps] = useState<Step[]>([{ title: '', fileUrl: null }]);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [form] = Form.useForm();

    const validateBeforeSubmit = () => {

        const hasAtLeastOneImage = image1File || image2File || image3File || image4File;

        if (!hasAtLeastOneImage) {
            toast.error('Please upload at least one recipe image');
            return false;
        }

        if (!skills.length) {
            toast.error('Please add at least one skill');
            return false;
        }

        if (!ingredients.length || ingredients.some(i => !i.name)) {
            toast.error('Please add at least one ingredient');
            return false;
        }

        if (!nutritions.length || nutritions.some(n => !n.name)) {
            toast.error('Please add nutrition values');
            return false;
        }

        if (!steps.length || steps.some(s => !s.title.trim())) {
            toast.error('Please complete all instruction steps');
            return false;
        }

        return true;
    };

    const onFinish = async (values: any) => {
        if (!validateBeforeSubmit()) return;

        setIsSubmitting(true);

        try {
            const imageFiles = [image1File, image2File, image3File, image4File];
            const formData = new FormData();

            imageFiles.forEach((file) => {
                if (file) formData.append('images', file);
            });

            const uploading = await multipleUpload(formData).unwrap();

            if (uploading.status !== 200) {
                throw new Error('Failed to upload images');
            }

            const data: Trecipe = {
                ...values,
                images: uploading.url,
                ingredients,
                nutritionValue: nutritions,
                instruction: steps,
                required_skill: skills,
            };

            const creatingRecipe = await createRecipe(data).unwrap();

            if (creatingRecipe?.status === 201) {
                toast.success(creatingRecipe.message);
                window.location.reload();
            }
        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong');
        } finally {
            setIsSubmitting(false);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <section className='mt-20'>
            <h1 className='text-xl font-medium text-gray-700'>Add Recipes</h1>

            <div className='bg-[#faf9f6] py-10 px-10 mt-4 rounded-sm'>
                <Form
                    name="recipe"
                    layout='vertical'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <div className='flex items-start justify-between gap-10'>
                        {/* Left side */}
                        <div className='w-[45%]'>
                            {/* Images */}
                            <Form.Item label="Upload Recipe Image">
                                <ImageUpload
                                    setImage1File={setImage1File}
                                    setImage2File={setImage2File}
                                    setImage3File={setImage3File}
                                    setImage4File={setImage4File}
                                    image1File={image1File}
                                    image2File={image2File}
                                    image3File={image3File}
                                    image4File={image4File}
                                // handleImageDelete={handleImageDelete}
                                />
                            </Form.Item>

                            {/* Title */}
                            <Form.Item
                                name="title"
                                label="Recipe Name"
                                rules={[{ required: true, message: 'Recipe name is required' }]}
                            >
                                <Input style={{ padding: '8px' }} placeholder='Type recipe name...' />
                            </Form.Item>

                            {/* Description */}
                            <Form.Item
                                name="description"
                                label="Description"
                                rules={[{ required: true, message: 'Description is required' }]}
                            >
                                <TextArea rows={6} placeholder='Type here...' />
                            </Form.Item>

                            {/* Serving */}
                            <Form.Item
                                name="serving"
                                label="Portion Size For"
                                rules={[{ required: true, message: 'Serving size is required' }]}
                            >
                                <Input type="number" style={{ width: '200px', padding: '10px' }} />
                            </Form.Item>

                            <hr />

                            <div className='mt-5'>
                                {/* Cooking Mode */}
                                <Form.Item
                                    name="coocking_mode"
                                    label="Cooking Mode"
                                    rules={[{ required: true, message: 'Please select cooking mode' }]}
                                >
                                    <Select style={{ width: '100%', height: '40px' }}>
                                        <Select.Option value="everyday">Everyday</Select.Option>
                                        <Select.Option value="emergency">Emergency</Select.Option>
                                        <Select.Option value="meal prep">Meal Prep</Select.Option>
                                    </Select>
                                </Form.Item>

                                {/* Component */}
                                <Form.Item name='component' label='Component'>
                                    <Select style={{ width: '100%', height: '40px' }}>
                                        <Select.Option value="vegtable">Vegtables</Select.Option>
                                        <Select.Option value="protine">Protine</Select.Option>
                                        <Select.Option value="base">Base</Select.Option>
                                        <Select.Option value="connector">Connector</Select.Option>
                                        <Select.Option value="topping">topping</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>

                            <hr />

                            {/* Time */}
                            <div className='flex gap-5 mt-5'>
                                <Form.Item
                                    name={['time', 'totalTime']}
                                    label="Total Time"
                                    rules={[{ required: true, message: 'Total time is required' }]}
                                >
                                    <Input style={{ width: '200px', padding: '8px' }} />
                                </Form.Item>

                                <Form.Item
                                    name={['time', 'prepTime']}
                                    label="Prep Time"
                                    rules={[{ required: true, message: 'Prep time is required' }]}
                                >
                                    <Input style={{ width: '200px', padding: '8px' }} />
                                </Form.Item>

                                <Form.Item
                                    name={['time', 'cookTime']}
                                    label="Cook Time"
                                    rules={[{ required: true, message: 'Cook time is required' }]}
                                >
                                    <Input style={{ width: '200px', padding: '8px' }} />
                                </Form.Item>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className='w-[55%]'>
                            {/* Skills */}
                            <SkillComponent form={form} setSkill={setSkill} skills={skills} />

                            {/* Instruction Steps */}
                            <div className='my-8'>
                                <p>Instruction Steps</p>
                                <InstructionSteps steps={steps} setSteps={setSteps} />
                            </div>

                            <hr />

                            {/* Ingredient Field */}
                            <div className='mt-10'>
                                <p>Ingredient Value</p>
                                <IngredientField ingredients={ingredients} setIngredients={setIngredients} />
                            </div>

                            <hr className='mt-6' />

                            {/* Nutrition Field */}
                            <div className='mt-10'>
                                <p>Nutrition Value</p>
                                <NutritionField nutritions={nutritions} setNutritions={setNutritions} />
                            </div>

                            <div className='flex items-center gap-5 mt-6'>
                                {/* Allergens */}
                                <Form.Item
                                    name="allergens"
                                    label="Allergens (Include)"
                                    rules={[{ required: true, message: 'Please add allergens' }]}
                                >
                                    <Input style={{ width: '350px', padding: '8px' }} />
                                </Form.Item>

                                {/* Tags */}
                                <Form.Item
                                    name="tags"
                                    label="Tags (Maximum 20)"
                                    rules={[{ required: true, message: 'Please add at least one tag' }]}
                                >
                                    <Input style={{ width: '350px', padding: '8px' }} />
                                </Form.Item>
                            </div>
                        </div>
                    </div>

                    <hr />

                    {/* Publish Button */}
                    <div className='flex items-end justify-end'>
                        <Button
                            htmlType="submit"
                            disabled={isSubmitting}
                            style={{
                                marginTop: '20px',
                                backgroundColor: '#1C2D07',
                                color: 'white',
                                width: '350px',
                                padding: '20px',
                                opacity: isSubmitting ? 0.6 : 1,
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            }}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Publishing...
                                </span>
                            ) : (
                                'Publish'
                            )}
                        </Button>
                    </div>
                </Form>
            </div>
        </section>
    );
};

export default CreateRecipe;
