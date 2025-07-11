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

  return (
    <div className="mt-16 mx-6 bg-white h-screen rounded-xl">
     
   <div className="w-[70%] p-10">
       <div>
        <div
          className="mt-8 cursor-pointer flex justify-between bg-[#f7f7f7] rounded items-center w-full h-[55px] duration-100 hover:border hover:border-[#c0bfbf]"
        >
          <p className="text-[16px] ml-8 font-medium">Personal Information</p>
          <Link
            href="personal-info"
            className="mr-8 text-[#193664] px-2 py-1 rounded cursor-pointer"
          >
            <IoIosArrowForward />
          </Link>
        </div>

        <div
         
          className="mt-8 cursor-pointer flex justify-between bg-[#f7f7f7] rounded items-center w-full h-[55px] duration-100 hover:border hover:border-[#c0bfbf]"
        >
          <p className="text-[16px] ml-8 font-medium">Change Password</p>
          <Link
            href="update-password"
            className="mr-8 text-[#193664] px-2 py-1 rounded cursor-pointer"
          >
            <IoIosArrowForward />
          </Link>
        </div>

        <div
          
          className="mt-8 cursor-pointer flex justify-between bg-[#f7f7f7] rounded items-center w-full h-[55px] duration-100 hover:border hover:border-[#c0bfbf]"
        >
          <p className="text-[16px] ml-8 font-medium">Privacy Policy</p>
          <Link
            href="privacy"
            className="mr-8 text-[#193664] px-2 py-1 rounded cursor-pointer"
          >
            <IoIosArrowForward />
          </Link>
        </div>
        <div
         
          className="mt-8 flex justify-between cursor-pointer bg-[#f7f7f7] rounded items-center w-full h-[55px] duration-100 hover:border hover:border-[#c0bfbf]"
        >
          <p className="text-[16px] ml-8 font-medium">Terms and Condition</p>
          <Link
            href="term"
            className="mr-8 text-[#193664] px-2 py-1 rounded cursor-pointer"
          >
            <IoIosArrowForward />
          </Link>
        </div>
        <div
         
          className="mt-8 cursor-pointer flex justify-between bg-[#f7f7f7] rounded items-center w-full h-[55px] duration-100 hover:border hover:border-[#c0bfbf]"
        >
          <p className="text-[16px] ml-8 font-medium">About Us</p>
          <Link
            href="about"
            className="mr-8 text-[#193664] px-2 py-1 rounded cursor-pointer"
          >
            <IoIosArrowForward />
          </Link>
        </div>
      </div>
   </div>
    </div>
  );
};

export default Settings;
