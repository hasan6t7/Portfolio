/* eslint-disable react/prop-types */

const SectionTitle = ({ title }) => {
  return (
    <div className="text-center font-bold my-5 md:my-20 text-3xl md:text-5xl text-[#70FF00] ">
      {" "}
      {`< ${title} />`}
    </div>
  );
};

export default SectionTitle;
