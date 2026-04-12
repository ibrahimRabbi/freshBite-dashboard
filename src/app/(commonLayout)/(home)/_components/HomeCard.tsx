import Image from 'next/image';
import React, { use } from 'react';
import people from '@/assets/nacesarry/people.png'
import { useAppRetentionQuery } from '@/redux/features/recipe/recipeApi';
import { LayoutList } from 'lucide-react';




const HomeCard = () => {


  const { data } = useAppRetentionQuery({})



  return (
    <section className='grid grid-cols-4 gap-10'>
    
        
            <div className='bg-white rounded-2xl flex items-center gap-4 p-4 shadow-md'>
              <div className='bg-slate-100 p-5 rounded-full'>
                <Image alt='people' src={people} />
              </div>
              <div>
                <p className='text-[#545454]'>Total Users</p>
                <p className='font-semibold text-black'>{data?.data?.totalUsers}</p>
              </div>
            </div>


            <div className='bg-white rounded-2xl flex items-center gap-4 p-4 shadow-md'>
              <div className='bg-slate-100 p-5 rounded-full'>
                <LayoutList className='text-zinc-600'/>
              </div>
              <div>
                <p className='text-[#545454]'>Total Recipes</p>
                <p className='font-semibold text-black'>{data?.data?.totalRecipes}</p>
              </div>
            </div>
            <div className='bg-white rounded-2xl flex items-center gap-4 p-4 shadow-md'>
              <div className='bg-slate-100 p-5 rounded-full'>
                <LayoutList className='text-zinc-600'/>
              </div>
              <div>
                <p className='text-[#545454]'>Total Recipes</p>
                <p className='font-semibold text-black'>{data?.data?.totalRecipes}</p>
              </div>
            </div>
            
            <div className='bg-white rounded-2xl flex items-center gap-4 p-4 shadow-md'>
              <div className='bg-slate-100 p-5 rounded-full'>
                 <LayoutList className='text-zinc-600'/>
              </div>
              <div>
                <p className='text-[#545454]'>Total Recipes</p>
                <p className='font-semibold text-black'>{data?.data?.totalRecipes}</p>
              </div>
            </div>

    </section>
  );
};

export default HomeCard;