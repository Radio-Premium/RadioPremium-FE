import WarningIcon from "@/assets/svgs/icon-warning-red.svg?react";

const Modal = ({ children, title, subTitle }) => {
  return (
    <div className="fixed inset-0 z-500 bg-white/30 backdrop-blur-sm">
      <div className="absolute top-[50%] left-[50%] z-600 translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white p-[30px]">
        <div className="pb-2">
          <WarningIcon className="mx-auto my-0" />
        </div>
        <div>
          <p className="text-center text-lg text-black">{title}</p>
          <p className="text-center text-sm text-[#888888]">{subTitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
