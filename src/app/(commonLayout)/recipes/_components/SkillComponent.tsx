import { useGetAllSkillQuery } from '@/redux/features/recipe/recipeApi';
import { Form, Select, Space } from 'antd';
import React, { useEffect, useMemo } from 'react';

interface SkillComponentProps {
  form: any;
  setSkill: (value: string[]) => void;
  skills?: string[];
}

const SkillComponent: React.FC<SkillComponentProps> = ({ form, setSkill, skills = [] }) => {
  const { data, isLoading } = useGetAllSkillQuery({});

  const skillOptions = useMemo(
    () =>
      data?.data?.map((skill: any) => ({
        value: skill._id,
        label: skill.skillTitle,
        desc: skill.cover,
      })) || [],
    [data]
  );

  useEffect(() => {
    if (skills.length > 0 && !isLoading) {
      const skillIds = skills.map((skill: any) => typeof skill === 'string' ? skill : skill._id);
      form.setFieldsValue({
        required_skill: skillIds,
      });
    }
  }, [skills, isLoading, form]);

  return (
    <Form.Item
      name="required_skill"
      label="Skills"
      rules={[
        {
          validator: (_, value) => {
            if (!value || value.length === 0) {
              return Promise.reject(new Error('At least one skill is required'));
            }
            return Promise.resolve();
          },
        },
      ]}
    >
      <Select
        mode="multiple"
        style={{ width: '100%', height: '35px' }}
        placeholder="Select skills"
        options={skillOptions}
        onChange={(value) => setSkill(value)}
        optionRender={(option) => (
          <Space>
            {option.data?.desc && (
              <img className="w-8 h-8 rounded-full object-cover" src={option.data.desc} alt="" />
            )}
            <span>{option.data?.label}</span>
          </Space>
        )}
      />
    </Form.Item>
  );
};

export default SkillComponent;