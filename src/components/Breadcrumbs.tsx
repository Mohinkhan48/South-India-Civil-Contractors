import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { siteConfig } from '../config/site';

export interface BreadcrumbItem {
  name: string;
  url?: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: 'dark' | 'light';
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, variant = 'dark' }) => {
  const schemaItems = [
    { name: 'Home', url: siteConfig.siteUrl },
    ...items.map((item) => ({
      name: item.name,
      url: item.url ? `${siteConfig.siteUrl}${item.url}` : siteConfig.siteUrl,
    })),
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  const isLight = variant === 'light';

  return (
    <>
      {/* Schema.org Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Visual Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className={`flex flex-wrap items-center gap-2 text-xs ${isLight ? 'text-gray-500' : 'text-[#D4C9BC]'}`}>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '';
              }}
              className={`flex items-center gap-1.5 transition-colors font-medium ${
                isLight ? 'hover:text-[#163048] text-gray-600' : 'hover:text-[#EDE3D3]'
              }`}
            >
              <Home className={`w-3.5 h-3.5 ${isLight ? 'text-[#163048]' : 'text-[#B78A55]'}`} />
              <span>Home</span>
            </a>
          </li>

          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={idx} className="flex items-center gap-2">
                <ChevronRight className={`w-3.5 h-3.5 ${isLight ? 'text-gray-400' : 'text-[#9A6048]'}`} />
                {isLast ? (
                  <span className={`font-bold ${isLight ? 'text-[#163048]' : 'text-[#EDE3D3]'}`} aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <button
                    onClick={item.onClick}
                    className={`transition-colors font-medium ${
                      isLight ? 'hover:text-[#163048] text-gray-600' : 'hover:text-[#EDE3D3]'
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

