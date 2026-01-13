import Image from 'next/image';
import React from 'react';
import people from '@/assets/nacesarry/people.png'
const HomeCard = () => {
  return (
    <section className='grid grid-cols-4 gap-10'>
      {
        [1, 2, 3, 4].map((v: number) => {
          return (
            <div key={v} className='bg-white rounded-2xl flex items-center gap-4 p-4 shadow-md'>
              <div className='bg-slate-100 p-5 rounded-full'>
                <Image alt='people' src={people} />
              </div>
              <div>
                <p className='text-[#545454]'>Total Users</p>
                <p className='font-semibold text-black'>1422</p>
              </div>
            </div>
          )
        })
      }

    </section>
  );
};

export default HomeCard;