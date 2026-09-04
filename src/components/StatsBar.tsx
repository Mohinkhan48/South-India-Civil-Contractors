import React from 'react';
import { siteConfig } from '../config/site';
import { Building, Users, Award, ShieldCheck } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      value: siteConfig.projectsCompleted,
      label: 'Projects Completed',
      icon: Building,
      detail: 'Across South India'
    },
    {
      value: siteConfig.happyClients,
      label: 'Happy Clients',
      icon: Users,
      detail: 'Villas & Enterprises'
    },
    {
      value: siteConfig.yearsOfExperience,
      label: 'Years Experience',
      icon: Award,
      detail: 'Engineering Mastery'
    },
    {
      value: siteConfig.qualityCommitment,
      label: 'Quality Commitment',
      icon: ShieldCheck,
      detail: 'Certified Materials'
    }
  ];

  return (
    /* Floats up into the hero section from below */
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-20 -mt-10 sm:-mt-14 lg:-mt-16">
      <div className="bg-[#131D23]/96 backdrop-blur-md border border-[#EDE3D3]/12 rounded-sm shadow-editorial-dark">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#EDE3D3]/10">
          {stats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 lg:p-7 group"
              >
                {/* Icon box */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-sm bg-[#45382F] border border-[#B78A55]/25 flex items-center justify-center flex-shrink-0 group-hover:border-[#9A6048] group-hover:bg-[#9A6048]/20 transition-all duration-300">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#B78A55] stroke-[1.5] group-hover:text-[#EDE3D3] transition-colors duration-300" />
                </div>

                {/* Stat Text */}
                <div className="flex flex-col">
                  <span className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#EDE3D3] tracking-tight group-hover:text-[#B78A55] transition-colors">
                    {item.value}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#D4C9BC] tracking-wide leading-tight">
                    {item.label}
                  </span>
                  <span className="text-[10px] text-[#D4C9BC]/60 hidden sm:block mt-0.5">
                    {item.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
