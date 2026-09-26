import React from 'react';

type Props = { children: React.ReactNode; href: string };

function SocialMediaHandles({ children, href }: Props) {
  const socialMediaStyles = 'inline-block text-primary-300';
  return (
    <a
      className={`${socialMediaStyles} rounded-full`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default SocialMediaHandles;
