"use client"

import SectionTitle from '@/Shared/sectionTitle/sectionTitle';
import useHeroData, { Hero } from '@/app/Hooks/useHeroData';
import React from 'react';

const BlogTitle = () => {
   const [heroData]=useHeroData()
  return (
    <>
      <div className="common-title blog-title-wrap animate-from-bottom">
        <SectionTitle
          title={(heroData as Hero)[3]?.title}
          subtitle={(heroData as Hero)[3]?.subtitle}
        />
      </div>
      
    </>
  );
};

export default BlogTitle;