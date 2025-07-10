import { Dropdown, Space } from 'antd';
import Image from 'next/image';
import { DownOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';



const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'My Account',
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'Profile',
    extra: '⌘P',
  },
  {
    key: '3',
    label: 'Billing',
    extra: '⌘B',
  },
  {
    key: '4',
    label: 'Settings',
    icon: <SettingOutlined />,
    extra: '⌘S',
  },
];





const Navber = () => {
  return (
    <nav className='bg-white flex items-center justify-between px-12 py-3 w-[87%] fixed shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] z-50'>
      <div className=''>
        <p className='text-2xl font-semibold'>Dashboard</p>
      </div>
      <div className='flex items-center gap-4'>
        <Image width={50} height={50} className='rounded-full ring-1' src='https://i.ibb.co/z5QXvMS/2148859448.jpg' alt='profile' />
        <Dropdown menu={{ items }}>
          <div className='font-medium'>
            <Space>
              Ibrahim Rabbi
              <DownOutlined />
            </Space>
          </div>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navber;