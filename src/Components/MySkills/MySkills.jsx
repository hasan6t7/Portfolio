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
    { link: "https://skillicons.dev/icons?i=next&theme=dark", name: "Next" },

    {
      link: "https://skillicons.dev/icons?i=firebase&theme=dark",
      name: "Firebase",
    },
    {
      link: "https://skillicons.dev/icons?i=redux&theme=dark",
      name: "Redux",
    },
  ];

  const backend = [
    {
      link: "https://skillicons.dev/icons?i=nodejs&theme=dark",
      name: "Node.js",
    },
    {
      link: "https://skillicons.dev/icons?i=express&theme=dark",
      name: "Express.js",
    },
    {
      link: "https://skillicons.dev/icons?i=mongodb&theme=dark",
      name: "MongoDB",
    },
  ];

  const tools = [
    { name: "Git", link: "https://skillicons.dev/icons?i=git&theme=dark" },
    {
      name: "GitHub",
      link: "https://skillicons.dev/icons?i=github&theme=dark",
    },
    {
      name: "VSCode",
      link: "https://skillicons.dev/icons?i=vscode&theme=dark",
    },
    {
      name: "Postman",
      link: "https://skillicons.dev/icons?i=postman&theme=dark",
    },
    {
      name: "Vercel",
      link: "https://skillicons.dev/icons?i=vercel&theme=dark",
    },
    {
      name: "Netlify",
      link: "https://skillicons.dev/icons?i=netlify&theme=dark",
    },
    { name: "Figma", link: "https://skillicons.dev/icons?i=figma&theme=dark" },
  ];

  return (
    <div id="skills" className="pt-10 pb-10 md:pb-28 mt-10">
      <SectionTitle title={"My Skills"} />
      <Container>
        <div className="my-10 md:my-16">
          {/* Section Title */}
          <h2 className="text-center font-bold text-xl md:text-3xl text-[#06b6d4] mb-10">
            {"< Frontend />"}
          </h2>

          {/* Tech Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center justify-center">
            {linkArr.map((item, index) => (
              <div
                key={index}
                className="bg-[#2b303236] p-4 md:p-5 rounded-xl shadow-md hover:shadow-[#06b6d4]/30 hover:scale-110 transition-all duration-200 flex flex-col items-center w-24 md:w-28"
              >
                <img
                  src={item.link}
                  alt={item.name}
                  className="w-12 h-12 md:w-16 md:h-16 mb-2 object-contain"
                  loading="lazy"
                />
                <p className="font-medium text-[#b3b3b3] text-xs md:text-sm text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="my-10 md:my-16">
          {/* Section Title */}
          <h2 className="text-center font-bold text-xl md:text-3xl text-[#06b6d4] mb-10">
            {"< Backend & Database />"}
          </h2>

          {/* Tech Grid */}
          <div className="flex flex-wrap justify-center gap-6">
            {backend.map((item, index) => (
              <div
                key={index}
                className="bg-[#2b303236] p-4 md:p-5 rounded-xl shadow-md hover:shadow-[#06b6d4]/30 hover:scale-110 transition-all duration-200 flex flex-col items-center w-24 md:w-28"
              >
                <img
                  src={item.link}
                  alt={item.name}
                  className="w-12 h-12 md:w-16 md:h-16 mb-2 object-contain"
                  loading="lazy"
                />
                <p className="font-medium text-[#b3b3b3] text-xs md:text-sm text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className="my-10 md:my-16">
            {/* Section Title */}
            <h2 className="text-center font-bold text-xl md:text-3xl text-[#06b6d4] mb-10">
              {"< Tools & Platforms />"}
            </h2>

            {/* Flex Grid */}
            <div className="flex flex-wrap justify-center gap-6">
              {tools.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#2b303236] p-4 md:p-5 rounded-xl shadow-md hover:shadow-[#06b6d4]/30 hover:scale-110 transition-all duration-200 flex flex-col items-center w-24 md:w-28"
                >
                  <img
                    src={item.link}
                    alt={item.name}
                    className="w-12 h-12 md:w-16 md:h-16 mb-2 object-contain"
                    loading="lazy"
                  />
                  <p className="font-medium text-[#b3b3b3] text-xs md:text-sm text-center">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MySkills;
