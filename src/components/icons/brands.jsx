import React from 'react';
import {
  siLinkedin,
  siOrcid,
  siResearchgate,
  siGooglescholar,
} from 'simple-icons/icons';

function BrandSvg({ title, path, hex, className = '', ...props }) {
  return (
    <svg
      role='img'
      aria-label={title}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      width='20'
      height='20'
      {...props}
    >
      <title>{title}</title>
      <path d={path} fill={`#${hex}`} />
    </svg>
  );
}

export const LinkedInIcon = (props) => (
  <BrandSvg title={siLinkedin.title} path={siLinkedin.path} hex={siLinkedin.hex} {...props} />
);

export const ORCIDIcon = (props) => (
  <BrandSvg title={siOrcid.title} path={siOrcid.path} hex={siOrcid.hex} {...props} />
);

export const ResearchGateIcon = (props) => (
  <BrandSvg
    title={siResearchgate.title}
    path={siResearchgate.path}
    hex={siResearchgate.hex}
    {...props}
  />
);

export const GoogleScholarIcon = (props) => (
  <BrandSvg
    title={siGooglescholar.title}
    path={siGooglescholar.path}
    hex={siGooglescholar.hex}
    {...props}
  />
);

