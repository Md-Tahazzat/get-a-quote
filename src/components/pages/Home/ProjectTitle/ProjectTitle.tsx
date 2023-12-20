"use client"

import SectionTitle from '@/Shared/sectionTitle/sectionTitle';
import useHeroData, { Hero } from '@/app/Hooks/useHeroData';
import React from 'react';

const ProjectTitle = () => {
  const [heroData]=useHeroData()

  return (
    <>
      <div className="common-title our-project-title animate-from-bottom">
        <SectionTitle
          title={(heroData as Hero)[2]?.title}
          subtitle={(heroData as Hero)[2]?.subtitle}
        />
      </div>
      
    </>
  );
};

export default ProjectTitle;