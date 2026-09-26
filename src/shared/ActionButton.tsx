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
      className="group flex w-fit items-center rounded-md bg-gradient-to-tr from-primary-300 to-gray-200 px-10 py-2 text-black hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.Contact)}
      href={`#${SelectedPage.Contact}`}
    >
      {children}
    </AnchorLink>
  );
}

export default ActionButton;
