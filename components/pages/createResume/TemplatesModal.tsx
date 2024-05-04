import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { TemplateList } from "@/utils/resumeData";
import { XIcon } from "@/assets/icon";
import Button from "@/components/common/Button";
import { setTemplate } from "@/redux/slice/resumeSlice";
import { RootState } from "@/redux/store/store";

interface TemplatesModalType {
  isOpen: boolean;
  handleClose: () => void;
}

const TemplatesModal = ({ isOpen, handleClose }: TemplatesModalType) => {
  const dispatch = useDispatch();

  const handleSelect = (templateId: number) => {
    dispatch(setTemplate(templateId));
    handleClose();
  };

  const selectedTemplate = useSelector(
    (state: RootState) => state.resume.template_id
  );

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
              <Dialog.Panel className="w-full font-sans max-w-[900px] bg-white transform overflow-hidden rounded-[10px] border-2 bg- py-4 px-2 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-[20px] font-bold text-primary text-center"
                >
                  Select <span className="text-secondary"> Templates</span>
                </Dialog.Title>
                <Button
                  variant="round"
                  size="round"
                  className="absolute right-2 top-2 group duration-150"
                  onClick={handleClose}
                >
                  <XIcon className=" stroke-secondary scale-125 cursor-pointer group-hover:stroke-primary duration-150" />
                </Button>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 py-5 rounded-[10px] gap-x-8 gap-y-6 px-5">
                  {TemplateList.map((template, index) => (
                    <div
                      key={index}
                      className="group hover:scale-105 duration-150"
                      onClick={() => handleSelect(template.id)}
                    >
                      <h1 className="text-center mb-1 text-[12px] xs:text-[14px]">
                        {template.name}
                      </h1>
                      <div className={`relative flex items-center flex-col`}>
                        <Image
                          src={template.sampleImg}
                          alt={template.name}
                          className={`group-hover:opacity-60 shadow rounded-md duration-150 ease-in cursor-pointer ${
                            selectedTemplate === template.id
                              ? "border-[6px] border-secondary"
                              : "border-[1px] border-primary"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TemplatesModal;
