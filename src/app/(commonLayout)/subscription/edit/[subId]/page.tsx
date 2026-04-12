'use client';
import React, { useEffect } from 'react';
import { Form, Input, Button, Select, InputNumber } from 'antd';
import { Plus, Trash2 } from 'lucide-react';
import { useGetSingleSubscriptionQuery, useUpdateSubscriptionMutation } from '@/redux/features/subscription/subcApi';
import toast from 'react-hot-toast';
import { useParams, useRouter } from 'next/navigation';

const SubscriptionForm = () => {
    const [form] = Form.useForm();
    const [updateSubscription] = useUpdateSubscriptionMutation();
    const { subId } = useParams();
    const { data, isLoading, refetch } = useGetSingleSubscriptionQuery(subId);
    const router = useRouter();

    // Set form values when data is loaded
    useEffect(() => {
        if (data?.data) {
            form.setFieldsValue({
                plan: data.data.plan,
                duration: data.data.duration,
                price: data.data.price,
                features: data.data.features
            });
        }
    }, [data, form]);

    const handleSubmit = () => {
        form.validateFields().then(async (values) => {
            try {
                const created = await updateSubscription({ subId, values }).unwrap();
                if (created.status === 200) {
                    toast.success('subscription updated successfully');
                    setTimeout(() => {
                        router.push('/subscription');
                    }, 1000);
                }
            } catch (err: any) {
                toast.error(err?.data?.message);
            }
        }).catch((errorInfo) => {
            // toast.error(errorInfo)
        });
    };

    if (isLoading) {
        return (
            <section className="bg-white w-full mx-auto min-h-screen mt-20 p-8">
                <div className="w-1/2 p-20 mx-auto text-center">
                    Loading...
                </div>
            </section>
        );
    }

    return (
        <section className="bg-white w-full mx-auto min-h-screen mt-20 p-8">
            <div className="w-1/2 p-20 mx-auto">
                <Form
                    form={form}
                    name="subscriptionForm"
                    layout="vertical"
                >
                    {/* Plan field */}
                    <Form.Item
                        name="plan"
                        label="Subscription Plan"
                        rules={[{ required: true, message: 'Please select a subscription plan!' }]}
                    >
                        <Select>
                            <Select.Option value="premium">Premium</Select.Option>
                            <Select.Option value="family">Family</Select.Option>
                            <Select.Option value="trial">Trial</Select.Option>
                            <Select.Option value="basic">Basic</Select.Option>
                            <Select.Option value="guest">Guest</Select.Option>
                        </Select>
                    </Form.Item>

                    {/* Duration field */}
                    <Form.Item
                        name="duration"
                        label="Duration (days)"
                        rules={[{ required: true, message: 'Please select a duration!' }]}
                    >
                        <Select>
                            <Select.Option value={7}>7 Days</Select.Option>
                            <Select.Option value={30}>30 Days (1 month)</Select.Option>
                            <Select.Option value={90}>90 Days (3 months)</Select.Option>
                            <Select.Option value={365}>365 Days (1 year)</Select.Option>
                        </Select>
                    </Form.Item>

                    {/* Price field */}
                    <Form.Item
                        name="price"
                        label="Price"
                        rules={[{ required: true, message: 'Please enter the price!' }]}
                    >
                        <InputNumber min={0} prefix="$" style={{ width: '100%' }} />
                    </Form.Item>

                    {/* Features field - Dynamic Input */}
                    <Form.Item label="Features">
                        <Form.List
                            name="features"
                            rules={[
                                {
                                    validator: async (_, features) => {
                                        if (!features || features.length < 1) {
                                            return Promise.reject(new Error('Please add at least one feature!'));
                                        }
                                    },
                                },
                            ]}
                        >
                            {(fields, { add, remove }, { errors }) => (
                                <div>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <div key={key} className='flex items-center gap-4 mb-2'>
                                            <Form.Item
                                                {...restField}
                                                name={name}
                                                rules={[{ required: true, message: 'Please enter a feature!' }]}
                                                style={{ width: '100%', marginBottom: 0 }}
                                            >
                                                <Input placeholder="Enter a feature" />
                                            </Form.Item>
                                            {fields.length > 1 && (
                                                <Trash2
                                                    className='text-red-600 cursor-pointer hover:text-red-700'
                                                    size={20}
                                                    onClick={() => remove(name)}
                                                />
                                            )}
                                        </div>
                                    ))}
                                    <Button
                                        type="dashed"
                                        onClick={() => add('')}
                                        style={{
                                            backgroundColor: 'black',
                                            color: 'white',
                                            width: '100%',
                                            marginTop: 10,
                                        }}
                                        icon={<Plus size={16} />}
                                    >
                                        Add More Features
                                    </Button>
                                    <Form.ErrorList errors={errors} />
                                </div>
                            )}
                        </Form.List>
                    </Form.Item>

                    {/* Submit Button */}
                    <Form.Item>
                        <div className="flex items-center justify-end">
                            <button
                                onClick={handleSubmit}
                                className="flex items-center gap-2 px-10 py-2.5 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors mt-5 cursor-pointer"
                            >
                                Update
                            </button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </section>
    );
};

export default SubscriptionForm;