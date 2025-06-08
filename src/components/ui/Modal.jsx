import WarningIcon from "@/assets/svgs/icon-warning-red.svg?react";

const Modal = ({ title, subTitle, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm">
      <div className="flex min-h-[400px] w-full max-w-[360px] flex-col rounded-xl bg-white px-5 py-6 shadow-lg">
        <div className="pb-2">
          <WarningIcon className="mx-auto h-11 w-11" />
        </div>

        <div className="w-full text-center">
          <div className="w-full text-center">
            <p className="text-[18px] font-bold text-black">{title}</p>
            <p className="mt-1 mb-3 text-[14px] text-gray-400">{subTitle}</p>
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
