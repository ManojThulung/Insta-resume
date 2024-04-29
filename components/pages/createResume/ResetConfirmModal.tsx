import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "@/components/common/Button";

interface ResetConfirmModalType {
  isOpen: boolean;
  handleClose: () => void;
  handleReset: () => void;
}

const ResetConfirmModal = ({
  isOpen,
  handleClose,
  handleReset,
}: ResetConfirmModalType) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-[10px] border-2 bg-light p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-[20px] font-bold">
                  Reset Form
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to clear all the fields?
                  </p>
                </div>

                <div className="mt-4 flex items-center flex-wrap justify-end gap-2">
                  <Button
                    variant={"outline"}
                    size="medium"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant={"fill"}
                    size="medium"
                    className="hover:bg-black"
                    onClick={handleReset}
                  >
                    Clear
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ResetConfirmModal;
