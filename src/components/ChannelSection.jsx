const ChannelSection = ({ title, children }) => {
  return (
    <section>
      <h2 className="text-[16px] font-semibold">{title}</h2>
      <ul className="scrollbar-hide flex h-60 w-full flex-col items-center overflow-scroll">
        {children}
      </ul>
    </section>
  );
};

export default ChannelSection;
