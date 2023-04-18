import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SelectedPage from './types';

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

function ActionButton({ children, setSelectedPage }: Props) {
  return (
    <AnchorLink
      className="rounded-md bg-primary-300 px-10 py-2 hover:bg-primary-100 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.Contact)}
      href={`#${SelectedPage.Contact}`}
    >
      {children}
    </AnchorLink>
  );
}

export default ActionButton;
