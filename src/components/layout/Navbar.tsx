/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/extensions */
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/logo.png';
import useMediaQuery from '@/hooks/useMediaQuery';
import Link from './Link';
import SelectedPage from '../../shared/types';

import ActionButton from '../../shared/ActionButton';

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Navbar({ isTopOfPage, selectedPage, setSelectedPage }: Props) {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = 'flex items-center justify-between';
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const navbarBackground = isTopOfPage ? '' : 'bg-white drop-shadow';

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="company logo" className="w-10" />
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Intro"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Portfolio"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Github</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    LinkedIn
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                type="button"
                className="rounded-full bg-primary-50 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-5 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button
              type="button"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <XMarkIcon className="h-6 w-6 rounded-full bg-gray-500 text-white" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-3xl">
            <Link
              page="Intro"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Portfolio"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
