const ChannelSection = ({ title, children, addTopMargin, heightClass }) => {
  return (
    <section>
      <h2
        className={`mb-2 text-[16px] font-semibold ${addTopMargin ? "mt-6" : ""}`}
      >
        {title}
      </h2>
      <ul
        className={`scrollbar-hide flex w-full flex-col items-center overflow-scroll ${heightClass}`}
      >
        {children}
      </ul>
    </section>
  );
};

export default ChannelSection;
