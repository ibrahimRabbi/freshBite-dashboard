import { Button, Form, Input, Modal } from "antd";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

// import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from "@ant-design/icons";

const Settings = () => {


  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const changePassword = (values) => {
  //   const { confirmPassword, ...ChangePassword } = values;
  //   console.log("Form values: ", ChangePassword);
  // };

  //['terms','privacy','about']

  const settingData = [{title:'Privacy Policy', query:'privacy'}, {title:'Terms & Conditions', query:'terms'}, { title:'About Us', query:'about'}]
  return (
    <div className="mt-16 mx-6 bg-white h-screen rounded-xl">

      <div className="w-[70%] p-10 space-y-10">


        <Link
          href="/settings/personal-info"
          className="pr-5 cursor-pointer flex justify-between text-[#193664] bg-[#f7f7f7] rounded items-center w-full h-[55px] duration-100 hover:border hover:border-[#c0bfbf]"
        >
          <div className="flex justify-between items-center w-full">
            <p className="text-[16px] ml-8 font-medium">Personal Information</p>
            <IoIosArrowForward />
          </div>
        </Link>

        <Link href='/settings/change-password' className="pr-5 cursor-pointer flex justify-between text-[#193664] bg-[#f7f7f7] rounded items-center w-full h-[55px] duration-100 hover:border hover:border-[#c0bfbf]"
        >
          <div className="flex justify-between items-center w-full">
            <p className="text-[16px] ml-8 font-medium">Change Password</p>
            <IoIosArrowForward />
          </div>

        </Link>

        <div className="space-y-10">
          {
            settingData.map((data, index) => {
              return (
                <Link href={`/settings/${data?.query}`} className="pr-5 cursor-pointer flex justify-between text-[#193664] bg-[#f7f7f7] rounded items-center w-full h-[55px] duration-100 hover:border hover:border-[#c0bfbf]"
                >
                 <div key={index} className="flex justify-between items-center w-full">
                   <p className="text-[16px] ml-8 font-medium">{data?.title}</p>
                  <IoIosArrowForward />
                 </div>
                </Link>
              )
            })
          }
        </div>


      </div>
    </div>
  );
};

export default Settings;
