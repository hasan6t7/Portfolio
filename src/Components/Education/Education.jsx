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

      <VerticalTimeline lineColor={"#70FF00"}>
      

        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid  #70FF00" }}
          date="2025 - Current"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            Self Learner
          </h3>

          <p>
            Started my journey in web development through self-learning,
            exploring HTML, CSS, and JavaScript to build projects independently.
            Later, I joined the Programming Hero course, which accelerated my
            growth through structured learning and real-world projects,
            solidifying my skills as a developer.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid  #70FF00" }}
          date="2021 - 2025"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            Diploma in Engineering
          </h3>

          <p>
            Pursuing a Diploma in Engineering Dept. of Computer Science &
            Technology, focusing on practical skills in programming, web
            development, and software engineering to build a strong foundation
            for my career as a developer.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid  #70FF00" }}
          date="2021"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            SSC
          </h3>

          <p>
            Successfully completed my Secondary School Certificate (SSC) in
            Science, building a strong foundation in Mathematics and Physics
            that sparked my interest in problem-solving and technology.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Education;
