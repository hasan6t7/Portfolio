import SectionTitle from "../../Hooks/SectionTitle/SectionTitle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdCastForEducation } from "react-icons/md";

const Education = () => {
  return (
    <div id="education" className="mt-10 md:mt-0">
      <SectionTitle title={"Education"}></SectionTitle>

      <VerticalTimeline lineColor={"#06b6d4"}>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid  #06b6d4" }}
          date="2025 - Current"
          dateClassName={"text-[#06b6d4]"}
          iconStyle={{ backgroundColor: "#161616", color: "#06b6d4" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#06b6d4]">
            Self Learner
          </h3>

          <p>
            Started my journey in web development through self-learning,
            exploring HTML, CSS, and JavaScript to build projects independently.
            Later, I joined the Programming Hero course, which accelerated my
            growth through structured learning and real-world projects,
            solidifying my skills as a developer.
          </p>
        </VerticalTimelineElement> */}

        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid  #06b6d4" }}
          date="2021 - 2025"
          dateClassName={"text-[#06b6d4]"}
          iconStyle={{ backgroundColor: "#161616", color: "#06b6d4" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#06b6d4]">
            Diploma in Engineering
          </h3>

          <p className="text-[#B0B0B0] mb-6 leading-relaxed">
            Completed a{" "}
            <span className="text-[#06b6d4] font-semibold">
              Diploma in Engineering
            </span>{" "}
            with a CGPA of{" "}
            <span className="text-[#06b6d4] font-semibold">3.75</span> in the{" "}
            <span className="text-[#06b6d4] font-semibold">
              Department of Computer Science & Technology
            </span>
            . Focused on practical skills in programming, web development, and
            software engineering to build a strong foundation for my career as a
            developer.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid  #06b6d4" }}
          date="2021"
          dateClassName={"text-[#06b6d4]"}
          iconStyle={{ backgroundColor: "#161616", color: "#06b6d4" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#06b6d4]">
            SSC
          </h3>

          <p>
            Successfully completed my Secondary School Certificate (SSC) in
            Science, building a strong foundation in Mathematics and Physics
            that sparked my interest in problem-solving and technology.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
