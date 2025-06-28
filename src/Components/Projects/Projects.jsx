/* eslint-disable react/no-unescaped-entities */
import Container from "../../Hooks/Container";
import SectionTitle from "../../Hooks/SectionTitle/SectionTitle";
import project1 from "../../assets/phudu.png";
import project2 from "../../assets/auction.png";
import project3 from "../../assets/roomie-fi.png";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Projects.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Projects = () => {
  return (
    <div id="projects">
      <SectionTitle title={"Projects"}></SectionTitle>
      <Container>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
            {/* Project 1 */}
            <SwiperSlide>
              <div className="card  shadow-md hover:shadow-xl text-center md:text-left cursor-grab">
                <div className="flex flex-col md:flex-row">
                  <figure>
                    <img src={project1} alt="Project" />
                  </figure>
                  <div className="card-body">
                    <h2 className=" font-bold text-2xl  text-[#70FF00]">
                      Phudu
                    </h2>
                    <p className="mt-3 text-[#828282]">
                      Phudu is a Doctor Booking Website . You can booked an
                      appointment if Doctor is available and you can manage your
                      appointment. You can see Every Doctor's Details here and then if you want to book an appointment , you can . 
                    </p>

                    <div className="flex gap-1 justify-center md:justify-start my-2">
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
                          alt="HTML"
                          title="HTML"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
                          alt="CSS"
                          title="CSS"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png"
                          alt="Firebase"
                          title="Firebase"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
                          alt="JavaScript"
                          title="JavaScript"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
                          alt="Node.js"
                          title="Node.js"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
                          alt="Express"
                          title="Express"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"
                          alt="mongoDB"
                          title="mongoDB"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png"
                          alt="Material UI"
                          title="Material UI"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"
                          alt="Tailwind CSS"
                          title="Tailwind CSS"
                        />
                      </code>
                    </div>

                    <div className="card-actions justify-center md:justify-start mt-5">
                      <NavLink
                        to={"https://regal-bubblegum-a6baed.netlify.app/"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                          Live Link
                        </button>
                      </NavLink>

                      <NavLink
                        to={
                          "https://github.com/hasan6t7/Phudu-Doctor"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                          Client Code
                        </button>
                      </NavLink>

                     
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Project 2 */}
            <SwiperSlide>
              {" "}
              <div className="card shadow-md hover:shadow-xl text-center md:text-left cursor-grab">
                <div className="flex flex-col md:flex-row">
                  <figure>
                    <img src={project2} alt="Project" />
                  </figure>
                  <div className="card-body">
                    <h2 className=" font-bold text-2xl text-[#70FF00]">
                      Drive Master Pro
                    </h2>
                    <p className="mt-3 text-[#828282]">
                      Explore diverse cars on our website. Create an account for
                      'Add Product' and 'My Cart.' The mobile-friendly design
                      ensures easy access. Get sweet alerts for successful
                      actions like registration, login, and adding to your cart.
                    </p>

                    <div className="flex gap-1 justify-center md:justify-start my-2">
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
                          alt="HTML"
                          title="HTML"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
                          alt="CSS"
                          title="CSS"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png"
                          alt="Firebase"
                          title="Firebase"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
                          alt="JavaScript"
                          title="JavaScript"
                        />
                      </code>
                      <code>
                        <img
                          width="20"
                          src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
                          alt="React"
                          title="React"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
                          alt="Node.js"
                          title="Node.js"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
                          alt="Express"
                          title="Express"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"
                          alt="mongoDB"
                          title="mongoDB"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://www.vectorlogo.zone/logos/axios/axios-ar21.svg"
                          alt="HTML"
                          title="HTML"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"
                          alt="Tailwind CSS"
                          title="Tailwind CSS"
                        />
                      </code>
                    </div>

                    <div className="card-actions justify-center md:justify-start mt-5">
                      <NavLink
                        to={"https://calm-bombolone-252c32.netlify.app/"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                          Live link
                        </button>
                      </NavLink>

                      <NavLink
                        to={
                          "https://github.com/hasan6t7/Auction-gellary"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                          Client Code
                        </button>
                      </NavLink>

                     
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Project 3 */}
            <SwiperSlide>
              <div className="card  shadow-md hover:shadow-xl text-center md:text-left cursor-grab">
                <div className="flex flex-col md:flex-row">
                  <figure>
                    <img src={project3} alt="Project" />
                  </figure>
                  <div className="card-body">
                    <h2 className=" font-bold text-2xl  text-[#70FF00]">
                      Adventure Hub
                    </h2>
                    <p className="mt-3 text-[#828282]">
                      Discover tours on our mobile-friendly site. Create an
                      account for 'Add Service,' 'My Booking,' and 'My
                      Schedules.' Receive sweet alerts for successful actions
                      like registration, login, and service or booking
                      additions.
                    </p>

                    <div className="flex gap-1 justify-center md:justify-start my-2">
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
                          alt="HTML"
                          title="HTML"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
                          alt="CSS"
                          title="CSS"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png"
                          alt="Firebase"
                          title="Firebase"
                        />
                      </code>
                      <code>
                        <img
                          width="20"
                          src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
                          alt="React"
                          title="React"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
                          alt="JavaScript"
                          title="JavaScript"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
                          alt="Node.js"
                          title="Node.js"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
                          alt="Express"
                          title="Express"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"
                          alt="mongoDB"
                          title="mongoDB"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://www.vectorlogo.zone/logos/axios/axios-ar21.svg"
                          alt="HTML"
                          title="HTML"
                        />
                      </code>
                      <code>
                        <img
                          width="25"
                          src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"
                          alt="Tailwind CSS"
                          title="Tailwind CSS"
                        />
                      </code>
                    </div>

                    <div className="card-actions justify-center md:justify-start mt-5">
                      <NavLink
                        to={"https://roomie-fi.web.app/"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                          Live link
                        </button>
                      </NavLink>

                      <NavLink
                        to={
                          "https://github.com/hasan6t7/roomie-fi-client"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                          Client Code
                        </button>
                      </NavLink>

                     
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default Projects;
