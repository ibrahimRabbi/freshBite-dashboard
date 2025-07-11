'use client'
import { Button, Form, Input, Select, Upload } from 'antd';
import React from 'react';
import ImageUpload from './_components/ImageUpload';
import TextArea from 'antd/es/input/TextArea';
import { FiPlus } from 'react-icons/fi';
import TiptapEditor from './_components/RichText';


const CreateRecipe = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <section className='mt-16 '>
            <h1 className='text-xl font-semibold'>Add Recipes</h1>
            <div className='bg-[#faf9f6] py-10 px-20 mt-4 rounded-sm'>
                <Form
                    name="basic"
                    layout='vertical'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <div className='flex items-start justify-between gap-10'>
                        <div className='w-1/2'>
                            <Form.Item name='images' label='Upload Recipe Image/ Video'>
                                <ImageUpload />
                            </Form.Item>

                            <Form.Item name='recipe_name' label='Recipe Name'>
                                <Input style={{ padding: '8px' }} placeholder='type recipe name...' />
                            </Form.Item>

                            <Form.Item name='description' label='Description'>
                                <TextArea rows={6} placeholder='type here....' />
                            </Form.Item>

                            <Form.Item name='portionSize' label='Portion Size For'>
                                <Input style={{ width: '200px', padding: '10px' }} placeholder='type number...' />
                            </Form.Item>
                            <hr />
                            <div className='mt-5'>
                                <Form.Item name='cockingMode' label='cocking mode'>
                                    <Select style={{ width: '100%'}}>
                                        <Select.Option value="sample">Sample</Select.Option>
                                    </Select>
                                </Form.Item>


                                <Form.Item name='component' label='component'>
                                    <Select style={{ width: '100%' }}>
                                        <Select.Option value="sample">Sample</Select.Option>
                                    </Select>
                                </Form.Item>


                            </div>
                            <hr />
                            <div className='flex gap-5 mt-5'>
                                <Form.Item name='totalTime' label='Total Time'>
                                    <Input style={{ width: '200px', padding: '8px' }} placeholder='type total time...' />
                                </Form.Item>

                                <Form.Item name='prepTime' label='prep Time'>
                                    <Input style={{ width: '200px', padding: '8px' }} placeholder='type total time...' />
                                </Form.Item>

                                <Form.Item name='coockTime' label='coock Time'>
                                    <Input style={{ width: '200px', padding: '8px' }} placeholder='type total time...' />
                                </Form.Item>

                            </div>
                        </div>

                        {/* 2nd layer */}
                        <div className='w-1/2'>
                            <Form.Item name='instruction' label='Instruction'>
                               <TiptapEditor/>
                            </Form.Item>

                             <Form.Item name='skills' label='skills'>
                               <TiptapEditor/>
                            </Form.Item>
                            <hr />
                            <div className='mt-10'>
                                <p>Ingredient Value</p>
                                <div className='flex gap-7 mt-2'>
                                    <Input style={{ padding: '8px' }} placeholder='Ingredient name...' />
                                    <Input style={{ padding: '8px' }} placeholder='amount...' />
                                    <Select defaultValue='unit'>
                                        <Select.Option value="KG">KG</Select.Option>
                                        <Select.Option value="GM">GM</Select.Option>
                                    </Select>
                                </div>
                                <Button style={{ backgroundColor: '#1C2D07', color: 'white', width: '170px', marginTop: '15px', borderRadius: '20px' }}><FiPlus />Add ingredient</Button>
                            </div>
                            <hr className='mt-6' />


                            <div className='mt-10'>
                                <p>Nutration Value</p>
                                <div className='flex gap-7 mt-2'>
                                    <Input style={{ padding: '8px' }} placeholder='Nutration name...' />
                                    <Input style={{ padding: '8px' }} placeholder='amount...' />
                                    <Select defaultValue='unit'>
                                        <Select.Option value="KG">KG</Select.Option>
                                        <Select.Option value="GM">GM</Select.Option>
                                    </Select>
                                </div>
                                <Button style={{ backgroundColor: '#1C2D07', color: 'white', width: '170px', marginTop: '15px', borderRadius: '20px' }}><FiPlus />Add Nutration</Button>
                            </div>


                            <div className='flex items-start gap-5 mt-10'>
                                <Form.Item name='allergens' label='Allergens (Include)'>
                                    <Input style={{ width: '350px', padding: '8px' }} />
                                    <p className='text-gray-400 text-[16px]'>Suggested: Cereals containing
                                        gluten, Celery, Crustaceans, Eggs, Fish, Peanuts, Soy, Milk (incl. Lactose), Tree Nuts, Mustard, Sesame, Sulphites, Lupins, Molluscs</p>
                                </Form.Item>

                                <Form.Item name='tags' label='Tags (Maximum 20)'>
                                    <Input style={{ width: '350px', padding: '8px' }} />
                                    <p className='text-gray-400 text-[16px]'>Suggested: Breakfast, Eggs, 5min recipes, easy_recipes,</p>
                                </Form.Item>
                            </div>

                        </div>
                    </div>
                    <hr />
                   
                   <div className='flex items-end justify-end'>
                     <Button style={{ marginTop: '20px', backgroundColor: '#1C2D07', color: 'white', width: '350px', padding: '20px' }} type='default'>Publish</Button>
                   </div>
                </Form>

            </div>

        </section>
    );
};

export default CreateRecipe;