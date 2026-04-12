'use client';

import { Button, Form, Input, Select } from 'antd';
import React, { useState, useEffect } from 'react';
import TextArea from 'antd/es/input/TextArea';
import {
  useUpdateRecipesMutation,
  useGetSingleRecipeQuery,
  useMultipleUploadMutation,
} from '@/redux/features/recipe/recipeApi';
import toast from 'react-hot-toast';
import ImageUpload from '../../_components/ImgeUpload';
import SkillComponent from '../../_components/SkillComponent';
import InstructionSteps from '../../_components/Instruction';
import IngredientField from '../../_components/IngrediantFiled';
import NutritionField from '../../_components/NutrationField';
import { useParams } from 'next/navigation';

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
  time: {
    totalTime: string;
    prepTime: string;
    cookTime: string;
  };
}

const EditRecipe = () => {
  const { recipeId } = useParams();
  const { data, refetch } = useGetSingleRecipeQuery(recipeId);

  const [image1File, setImage1File] = useState<string | File>('');
  const [image2File, setImage2File] = useState<string | File>('');
  const [image3File, setImage3File] = useState<string | File>('');
  const [image4File, setImage4File] = useState<string | File>('');

  const [originalData, setOriginalData] = useState<any>(null);

  const [skills, setSkill] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState([
    { id: 1, name: '', categories: '', value: '', unit: '', householdValue: '', houseHoldUnit: '' },
  ]);
  const [nutritions, setNutritions] = useState([{ id: 1, name: '', value: '', unit: '' }]);
  const [steps, setSteps] = useState<Step[]>([{ title: '', fileUrl: null }]);

  const [multipleUpload] = useMultipleUploadMutation();
  const [updateRecipe] = useUpdateRecipesMutation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form] = Form.useForm();

  useEffect(() => {
    if (data?.data) {
      const recipe = data.data;

      // Store original data
      setOriginalData(recipe);

      form.setFieldsValue({
        title: recipe.title,
        description: recipe.description,
        serving: recipe.serving,
        coocking_mode: recipe.coocking_mode,
        allergens: recipe.allergens.join(', '),
        tags: recipe.tags.join(', '),
        time: {
          totalTime: recipe.time.totalTime,
          prepTime: recipe.time.prepTime,
          cookTime: recipe.time.cookTime,
        },
      });

      setImage1File(recipe.images[0] || '');
      setImage2File(recipe.images[1] || '');
      setImage3File(recipe.images[2] || '');
      setImage4File(recipe.images[3] || '');

      setSkill(recipe.required_skill || []);

      setIngredients(
        recipe.ingredients.map((i: any, idx: number) => ({
          id: idx + 1,
          name: i.name,
          value: i.value,
          unit: i.unit,
          categories: i.categories,
          householdValue: i.householdValue,
          houseHoldUnit: i.houseHoldUnit,
        }))
      );

      setNutritions(
        recipe.nutritionValue.map((n: any, idx: number) => ({
          id: idx + 1,
          name: n.name,
          value: n.value,
          unit: n.unit,
        }))
      );

      setSteps(
        recipe.instruction.map((s: any) => ({
          title: s.title,
          fileUrl: s.fileUrl || null,
        }))
      );
    }
  }, [data, form]);


  const validateBeforeSubmit = () => {
    const hasAtLeastOneImage = image1File || image2File || image3File || image4File;

    if (!hasAtLeastOneImage) {
      toast.error('Please upload at least one recipe image');
      return false;
    }
    return true;
  };


  const hasArrayChanged = (original: any[], current: any[]) => {
    if (!original || original.length !== current.length) return true;
    return JSON.stringify(original) !== JSON.stringify(current);
  };

  const onFinish = async (values: any) => {
    if (!validateBeforeSubmit()) return;

    setIsSubmitting(true);

    try {
      const allImages = [image1File, image2File, image3File, image4File];


      const existingUrls = allImages.filter(img => img && typeof img === 'string') as string[];
      const newFiles = allImages.filter(img => img && typeof img !== 'string') as File[];

      let uploadedUrls: string[] = [];


      if (newFiles.length > 0) {
        const formData = new FormData();
        newFiles.forEach(file => {
          formData.append('images', file);
        });

        const uploadResponse = await multipleUpload(formData).unwrap();

        if (uploadResponse.status !== 200) {
          throw new Error('Failed to upload images');
        }

        uploadedUrls = uploadResponse.url || [];
      }


      const finalImages = [...existingUrls, ...uploadedUrls];


      const recipeData: any = {
        ...values,
      };


      if (JSON.stringify(finalImages) !== JSON.stringify(originalData?.images)) {
        recipeData.images = finalImages;
      }


      if (hasArrayChanged(originalData?.required_skill, skills)) {
        recipeData.required_skill = skills;
      } else {
        recipeData.required_skill = originalData?.required_skill;
      }


      if (hasArrayChanged(originalData?.ingredients, ingredients)) {
        recipeData.ingredients = ingredients;
      } else {
        recipeData.ingredients = originalData?.ingredients;
      }


      if (hasArrayChanged(originalData?.nutritionValue, nutritions)) {
        recipeData.nutritionValue = nutritions;
      } else {
        recipeData.nutritionValue = originalData?.nutritionValue;
      }


      if (hasArrayChanged(originalData?.instruction, steps)) {
        recipeData.instruction = steps;
      } else {
        recipeData.instruction = originalData?.instruction;
      }

      const updatingRecipe = await updateRecipe({ id: recipeId, data: recipeData }).unwrap();

      if (updatingRecipe?.status === 200 || updatingRecipe?.status === 201) {
        toast.success(updatingRecipe.message || 'Recipe updated successfully');
        setTimeout(() => {
          refetch()
        }, 1500)
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

  // const handleImageDelete = (imageIndex: number) => {
  //   switch (imageIndex) {
  //     case 0:
  //       setImage1File('');
  //       break;
  //     case 1:
  //       setImage2File('');
  //       break;
  //     case 2:
  //       setImage3File('');
  //       break;
  //     case 3:
  //       setImage4File('');
  //       break;
  //   }
  // };

  return (
    <section className='mt-10'>
      <h1 className='text-xl font-semibold'>Edit Recipe</h1>

      <div className='bg-[#faf9f6] py-10 px-10 mt-4 rounded-sm'>
        <Form
          form={form}
          name="recipe"
          layout='vertical'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className='flex items-start justify-between gap-10'>
            <div className='w-[45%]'>
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

              <Form.Item
                name="title"
                label="Recipe Title"
                rules={[{ required: true, message: 'Please enter recipe title' }]}
              >
                <Input placeholder="Enter recipe title" style={{ padding: '8px' }} />
              </Form.Item>

              <Form.Item
                name="description"
                label="Description"
                rules={[{ required: true, message: 'Please enter description' }]}
              >
                <TextArea rows={4} placeholder="Enter recipe description" />
              </Form.Item>

              <div className='flex items-center gap-5'>
                <Form.Item
                  name="serving"
                  label="Serving"
                  rules={[{ required: true, message: 'Please enter serving' }]}
                >
                  <Input type="number" placeholder="e.g., 4" style={{ width: '150px', padding: '8px' }} />
                </Form.Item>

                <Form.Item
                  name="coocking_mode"
                  label="Cooking Mode"
                  rules={[{ required: true, message: 'Please select cooking mode' }]}
                >
                  <Select style={{ width: '200px' }} placeholder="Select mode">
                    <Select.Option value="everyday">Everyday</Select.Option>
                    <Select.Option value="emergency">Emergency</Select.Option>
                    <Select.Option value="meal prep">Meal Prep</Select.Option>
                  </Select>
                </Form.Item>
              </div>

              <div className='mt-4'>
                <p className='mb-2 font-medium'>Time</p>
                <div className='flex items-center gap-5'>
                  <Form.Item
                    name={['time', 'totalTime']}
                    label="Total Time"
                    rules={[{ required: true, message: 'Required' }]}
                  >
                    <Input placeholder="e.g., 30 min" style={{ width: '120px', padding: '8px' }} />
                  </Form.Item>

                  <Form.Item
                    name={['time', 'prepTime']}
                    label="Prep Time"
                    rules={[{ required: true, message: 'Required' }]}
                  >
                    <Input placeholder="e.g., 10 min" style={{ width: '120px', padding: '8px' }} />
                  </Form.Item>

                  <Form.Item
                    name={['time', 'cookTime']}
                    label="Cook Time"
                    rules={[{ required: true, message: 'Required' }]}
                  >
                    <Input placeholder="e.g., 20 min" style={{ width: '120px', padding: '8px' }} />
                  </Form.Item>
                </div>
              </div>
            </div>

            <div className='w-[55%]'>
              <SkillComponent form={form} setSkill={setSkill} skills={skills} />

              <div className='my-8'>
                <p>Instruction Steps</p>
                <InstructionSteps steps={steps} setSteps={setSteps} />
              </div>

              <hr />

              <div className='mt-10'>
                <p>Ingredient Value</p>
                <IngredientField ingredients={ingredients} setIngredients={setIngredients} />
              </div>

              <hr className='mt-6' />

              <div className='mt-10'>
                <p>Nutrition Value</p>
                <NutritionField nutritions={nutritions} setNutritions={setNutritions} />
              </div>

              <div className='flex items-center gap-5 mt-6'>
                <Form.Item
                  name="allergens"
                  label="Allergens (Include)"
                  rules={[{ required: true, message: 'Please add allergens' }]}
                >
                  <Input style={{ width: '350px', padding: '8px' }} />
                </Form.Item>

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
                  Updating...
                </span>
              ) : (
                'Update Recipe'
              )}
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default EditRecipe;