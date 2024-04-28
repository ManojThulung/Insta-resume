import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "@/components/common/Button";

interface DeleteModalType {
  isOpen: boolean;
  handleClose: () => void;
  title: string;
  index: number | null;
  handleDelete: (index: number) => void;
}

const DeleteModal = ({
  isOpen,
  handleClose,
  title,
  index,
  handleDelete,
}: DeleteModalType) => {
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-[20px] font-bold">
                  Delete {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to delete this {title}?
                  </p>
                </div>

                <div className="mt-4 flex items-center flex-wrap justify-end gap-2">
                  <Button
                    variant={"outline"}
                    size="medium"
                    onClick={() => handleClose(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant={"fill"}
                    size="medium"
                    className="hover:bg-black"
                    onClick={() => {
                      index !== null && handleDelete(index);
                    }}
                  >
                    Delete
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

export default DeleteModal;
