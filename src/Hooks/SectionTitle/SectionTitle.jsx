/* eslint-disable react/prop-types */

const SectionTitle = ({ title }) => {
  return (
    <div className="text-center font-bold my-5 md:my-20 text-3xl md:text-5xl text-[#06b6d4] ">
      {" "}
      {`< ${title} />`}
    </div>
  );
};

export default SectionTitle;
