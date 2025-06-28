import Container from "../../Hooks/Container";
import SectionTitle from "../../Hooks/SectionTitle/SectionTitle";

const MySkills = () => {
  const linkArr = [
    { link: "https://skillicons.dev/icons?i=html&theme=dark", name: "HTML" },
    { link: "https://skillicons.dev/icons?i=css&theme=dark", name: "CSS" },
    {
      link: "https://skillicons.dev/icons?i=tailwind&theme=dark",
      name: "Tailwind",
    },

    {
      link: "https://skillicons.dev/icons?i=javascript&theme=dark",
      name: "JavaScript",
    },

    { link: "https://skillicons.dev/icons?i=react&theme=dark", name: "React" },

    {
      link: "https://skillicons.dev/icons?i=mongodb&theme=dark",
      name: "MongoDB",
    },
    {
      link: "https://skillicons.dev/icons?i=nodejs&theme=dark",
      name: "Node.js",
    },
    {
      link: "https://skillicons.dev/icons?i=express&theme=dark",
      name: "Express.js",
    },
    {
      link: "https://skillicons.dev/icons?i=firebase&theme=dark",
      name: "Firebase",
    },
  ];

  return (
    <div id="skills" className="pt-10 pb-10 md:pb-28 mt-10">
      <SectionTitle title={"My Skills"} />
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {linkArr.map((item, index) => (
            <div
              key={index}
              className="bg-[#2b303236] p-5 rounded-md shadow-lg hover:scale-110 transition-transform duration-200 flex flex-col items-center w-24 md:w-28"
            >
              <img
                src={item.link}
                alt={item.name}
                className="w-12 h-12 md:w-16 md:h-16 mb-2"
                loading="lazy"
              />
              <p className="font-medium text-[#828282] text-sm">{item.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MySkills;
