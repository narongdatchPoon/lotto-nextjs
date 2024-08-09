import { useEffect, useState } from "react";

export default function Setting({
  onSave,
  defaultUnit,
  defaultMaxTimeSpin,
  defaultMinTimeSpin,
}) {
  const [isOpenDialog, setOpenDialog] = useState(true);
  const [unit, setUnit] = useState(defaultUnit);
  const [minTimeSpin, setMinTimeSpin] = useState(defaultMinTimeSpin);
  const [maxTimeSpin, setMaxTimeSpin] = useState(defaultMaxTimeSpin);
  useEffect(() => {
    setUnit(defaultUnit);
    setMinTimeSpin(defaultMinTimeSpin);
    setMaxTimeSpin(defaultMaxTimeSpin);
  }, [isOpenDialog]);

  return (
    <>
      <div className="p-10">
        <div className="scale-150">
          <button
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            className="block text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center "
            type="button"
            onClick={() => {
              setOpenDialog(true);
            }}
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"
              />
            </svg>
          </button>
        </div>

        {isOpenDialog && (
          <div
            className="relative z-50"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-300 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          className="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"
                          />
                        </svg>
                        {/* <svg
                          className="h-6 w-6 text-red-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg> */}
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3
                          className="text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Setting
                        </h3>
                        <div className="mt-4">
                          <label
                            for="default-range"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Select Unit
                          </label>
                          <button
                            onClick={() => setUnit(1)}
                            type="button"
                            className={`${
                              unit == 1
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            1
                          </button>
                          <button
                            onClick={() => setUnit(2)}
                            type="button"
                            className={`${
                              unit == 2
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            2
                          </button>
                          <button
                            onClick={() => setUnit(3)}
                            type="button"
                            className={`${
                              unit == 3
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            3
                          </button>
                        </div>

                        <div className="mt-6">
                          <label
                            for="default-range"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Min Time Sping (milisec)
                          </label>
                          <button
                            onClick={() => setMinTimeSpin(1000)}
                            type="button"
                            className={`${
                              minTimeSpin == 1000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            1000
                          </button>
                          <button
                            onClick={() => setMinTimeSpin(2000)}
                            type="button"
                            className={`${
                              minTimeSpin == 2000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            2000
                          </button>
                          <button
                            onClick={() => setMinTimeSpin(3000)}
                            type="button"
                            className={`${
                              minTimeSpin == 3000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            3000
                          </button>
                          <button
                            onClick={() => setMinTimeSpin(4000)}
                            type="button"
                            className={`${
                              minTimeSpin == 4000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            4000
                          </button>
                          <button
                            onClick={() => setMinTimeSpin(5000)}
                            type="button"
                            className={`${
                              minTimeSpin == 5000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            5000
                          </button>
                          <button
                            onClick={() => setMinTimeSpin(6000)}
                            type="button"
                            className={`${
                              minTimeSpin == 6000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            6000
                          </button>
                          <button
                            onClick={() => setMinTimeSpin(7000)}
                            type="button"
                            className={`${
                              minTimeSpin == 7000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            7000
                          </button>
                          <button
                            onClick={() => setMinTimeSpin(8000)}
                            type="button"
                            className={`${
                              minTimeSpin == 8000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            8000
                          </button>
                          <button
                            onClick={() => setMinTimeSpin(9000)}
                            type="button"
                            className={`${
                              minTimeSpin == 9000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            9000
                          </button>
                          <button
                            onClick={() => setMinTimeSpin(10000)}
                            type="button"
                            className={`${
                              minTimeSpin == 10000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            10000
                          </button>
                        </div>

                        <div className="mt-6">
                          <label
                            for="default-range"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Range Time Sping (milisec)
                          </label>
                          <button
                            onClick={() => setMaxTimeSpin(1000)}
                            type="button"
                            className={`${
                              maxTimeSpin == 1000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            1000
                          </button>
                          <button
                            onClick={() => setMaxTimeSpin(2000)}
                            type="button"
                            className={`${
                              maxTimeSpin == 2000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            2000
                          </button>
                          <button
                            onClick={() => setMaxTimeSpin(3000)}
                            type="button"
                            className={`${
                              maxTimeSpin == 3000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            3000
                          </button>
                          <button
                            onClick={() => setMaxTimeSpin(4000)}
                            type="button"
                            className={`${
                              maxTimeSpin == 4000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            4000
                          </button>
                          <button
                            onClick={() => setMaxTimeSpin(5000)}
                            type="button"
                            className={`${
                              maxTimeSpin == 5000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            5000
                          </button>
                          <button
                            onClick={() => setMaxTimeSpin(6000)}
                            type="button"
                            className={`${
                              maxTimeSpin == 6000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            6000
                          </button>
                          <button
                            onClick={() => setMaxTimeSpin(7000)}
                            type="button"
                            className={`${
                              maxTimeSpin == 7000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            7000
                          </button>
                          <button
                            onClick={() => setMaxTimeSpin(8000)}
                            type="button"
                            className={`${
                              maxTimeSpin == 8000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            8000
                          </button>
                          <button
                            onClick={() => setMaxTimeSpin(9000)}
                            type="button"
                            className={`${
                              maxTimeSpin == 9000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            9000
                          </button>
                          <button
                            onClick={() => setMaxTimeSpin(10000)}
                            type="button"
                            className={`${
                              maxTimeSpin == 10000
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-900"
                            } inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
                          >
                            10000
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => {
                        onSave({
                          unit: unit,
                          minTimeSpin: minTimeSpin,
                          maxTimeSpin: maxTimeSpin,
                        });
                        setOpenDialog(false);
                      }}
                      type="button"
                      className="inline-flex w-full ring-gray-300 justify-center rounded-md  ring-1 ring-inset bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setOpenDialog(false)}
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md   bg-white px-3 py-2 text-sm font-semibold text-gray-900  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
