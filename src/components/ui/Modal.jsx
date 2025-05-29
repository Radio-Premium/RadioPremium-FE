import WarningIcon from "@/assets/svgs/icon-warning-red.svg?react";

const Modal = ({ children, title, subTitle }) => {
  return (
    <div className="fixed inset-0 z-500 bg-white/30 backdrop-blur-sm">
      <div className="absolute top-[50%] left-[50%] z-600 w-[90vw] max-w-md min-w-[340px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white p-4 px-[25px] py-[20px] shadow-lg">
        <div className="pb-[10px]">
          <WarningIcon className="mx-auto h-[45px] w-[45px]" />
        </div>
        <div className="flex w-full flex-col items-center">
          <div className="w-[300px] text-center">
            <p className="text-[20px] font-bold text-black">{title}</p>
            <p className="text-center text-[16px] text-[#888888]">{subTitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
