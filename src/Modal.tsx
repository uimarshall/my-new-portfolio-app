/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

type Props = { title: React.ReactNode };

function Modal({ title }: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {/* Modal */}
      {/* <button
        data-modal-target="large-modal"
        data-modal-toggle="large-modal"
        className="block w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:w-auto"
        type="button"
      >
        Large modal
      </button> */}
      <button
        className="mb-1 mr-1 rounded 
      bg-blue-200 px-6 py-3 font-bold text-black shadow outline-none hover:shadow-lg focus:outline-none active:bg-blue-500"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details {title}
      </button>
      {/* <!-- Large Modal --> */}
      {showModal ? (
        //
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
          <div className="relative mx-auto my-6 w-auto max-w-3xl">
            <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
              <div className="flex items-start justify-between rounded-t border-b border-solid border-gray-300 p-5 ">
                <h3 className="font=semibold text-3xl">General Info</h3>
                <button
                  type="button"
                  className="float-right border-0 bg-transparent text-black"
                  onClick={() => setShowModal(false)}
                >
                  <span className="opacity-7 block h-6 w-6 rounded-full bg-gray-400 py-0 text-xl text-black">
                    x
                  </span>
                </button>
              </div>
              <div className="relative flex-auto p-6">
                <form className="w-full rounded bg-gray-200 px-8 pb-8 pt-6 shadow-md">
                  <label className="mb-1 block text-sm font-bold text-black">
                    First Name
                  </label>
                  <input className="w-full appearance-none rounded border px-1 py-2 text-black shadow" />
                  <label className="mb-1 block text-sm font-bold text-black">
                    Last Name
                  </label>
                  <input className="w-full appearance-none rounded border px-1 py-2 text-black shadow" />
                  <label className="mb-1 block text-sm font-bold text-black">
                    Address
                  </label>
                  <input className="w-full appearance-none rounded border px-1 py-2 text-black shadow" />
                  <label className="mb-1 block text-sm font-bold text-black">
                    City
                  </label>
                  <input className="w-full appearance-none rounded border px-1 py-2 text-black shadow" />
                </form>
              </div>
              <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                <button
                  className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none focus:outline-none"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="mb-1 mr-1 rounded bg-yellow-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-yellow-700"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
