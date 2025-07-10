import React, { ReactNode } from 'react';
import HomeCard from './_components/HomeCard';
import NewUsersChart from './_components/NewUserChart';
import MostViewedRecipes from './_components/MostViewdRecipes';
import TrendingRecipes from './_components/TrendingRecipe';
import UserEngeggement from './_components/UserEngeggement';

const page = () => {
    return (
        <div className='mt-16'>
          <HomeCard/>
          <div className='flex items-start gap-8 mt-8'>
            <div className='w-[45%]'><NewUsersChart/></div>
            <div className='w-[55%]'><MostViewedRecipes/></div>
          </div>
          <div className='flex items-start gap-8 mt-8'>
            <div className='w-[45%]'><TrendingRecipes/></div>
                 <div className='w-[55%]'><UserEngeggement/></div>
          </div>
        </div>
    );
};

export default page;