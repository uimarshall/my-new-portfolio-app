/* eslint-disable react/jsx-no-useless-fragment */

import ProjectDetailsCard from './ProjectDetailsCard';

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

function Modal({ isVisible, onClose }: Props) {
  const handleClose = (e: { target: { id: string } }) => {
    if (e.target.id === 'close') onClose();
  };
  return (
    <>
      {isVisible ? (
        <div
          id="close"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
          onClick={handleClose}
          onKeyDown={handleClose}
          role="button"
          tabIndex={0}
        >
          <div className="flex flex-col">
            <button
              type="button"
              className="place-self-end text-black"
              onClick={() => onClose()}
            >
              X
            </button>

            <div className="flex h-[540px] w-[1046px] flex-col bg-white px-2 shadow-lg">
              <ProjectDetailsCard />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
