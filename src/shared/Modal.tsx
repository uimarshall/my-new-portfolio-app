/* eslint-disable react/jsx-no-useless-fragment */
type Props = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ isVisible, onClose, children }: Props) {
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

            <div className=" h-[300px] w-[1046px] bg-white p-2">{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
