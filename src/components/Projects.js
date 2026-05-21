import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Emarket.png";
import projImg2 from "../assets/img/Rent.png";
import projImg3 from "../assets/img/School.png";
import projImg4 from "../assets/img/Feelance.png";
import projImg5 from "../assets/img/kcaa.png";
import projImg6 from "../assets/img/mirror.png";
import projImg7 from "../assets/img/realestate.png";
import projImg8 from "../assets/img/company.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ecommerce Market Place",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://e-market-place.vercel.app/"

    },
    {
      title: "Clothes Renting",
      description: "Design & Development Seo ",
      imgUrl: projImg2,
      link: "https://www.renttherunway.com/"
    },
    {
      title: "School",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://froebels.edu.pk/"
    },
    {
      title: "Freelance Platform",
      description: "Design & Development",
      imgUrl: projImg4,
      link: "https://dureforce.com/"
    },
    {
      title: "Companies Profiling",
      description: "Design & Development",
      imgUrl: projImg5,
      link: "https://www.kcaa.pk/"
    },
    {
      title: "Daily News , Articles",
      description: "Design & Development",
      imgUrl: projImg6,
      link: "https://mirrorspectator.com/"
    },
  ];
  const Secondprojects = [
    {
      title: "Real Estate Application",
      description: "Design & Development",
      imgUrl: projImg7,
      link: "https://liqa.com.sa/"
    },

    {
      title: "Company Website",
      description: "Design & Development",
      imgUrl: projImg8,
      link: "https://reacta-pp.vercel.app/"
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have worked on several notable projects, including an ERP 
                  system that streamlines business operations with modules for inventory,
         orders, and CRM using React and Node.js.Developed an ecommerce marketplace supporting multiple vendors and secure payments with React and Laravel.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Apps & Designs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">More</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          Secondprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                   
                       </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background decoration" />
    </section>
  )
}
