'use client';
import { useGetSettingDataQuery } from '@/redux/features/settings/settingApi';
import { Button } from 'antd';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import React, { use } from 'react';

const page = () => {

    const { daynamic } = useParams()

    const { data } = useGetSettingDataQuery(daynamic);



    return (
        <section className="relative mt-20 px-8">
      {/* Back arrow + Title */}
      <div className="flex items-center mb-6">
        <Link href="/settings" className="flex items-center gap-2 text-gray-600">
          <ArrowLeft className="w-6 h-6" />
          <span className="text-3xl font-semibold">{data?.data?.setting_title}</span>
        </Link>
      </div>

      {/* White Box */}
      <div className="bg-white rounded-xl min-h-[500px] px-8 pt-10 relative shadow-md">
        <div
          className="text-justify text-zinc-800"
          dangerouslySetInnerHTML={{ __html: data?.data?.value }}
        />
      </div>

      {/* Button outside white box, bottom-right */}
      <div className="flex justify-end mt-4">
        <Link href={`/settings/edit?query=${daynamic}`}>
          <Button
            style={{
              backgroundColor: "#1C2D07",
              color: "white",
              padding: "20px 25px",
            }}
          >
            Edit {data?.data?.setting_title}
          </Button>
        </Link>
      </div>
    </section>

    );
};

export default page;