const ChannelSection = ({ title, children, marginTop, height }) => {
  return (
    <section>
      <h2 className={`mb-2 text-base font-semibold ${marginTop}`}>{title}</h2>
      <ul
        className={`scrollbar-hide flex w-full flex-col items-center overflow-scroll ${height}`}
      >
        {children}
      </ul>
    </section>
  );
};

export default ChannelSection;
