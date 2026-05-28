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
      link: "https://e-market-place.vercel.app/",
      tags: ["React", "Laravel", "MySQL", "Stripe"]
    },
    {
      title: "Clothes Renting",
      description: "Design & Development SEO",
      imgUrl: projImg2,
      link: "https://www.renttherunway.com/",
      tags: ["React", "Sass", "SEO Optimization"]
    },
    {
      title: "School",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://froebels.edu.pk/",
      tags: ["React", "Bootstrap", "Node.js"]
    },
    {
      title: "Freelance Platform",
      description: "Design & Development",
      imgUrl: projImg4,
      link: "https://dureforce.com/",
      tags: ["React", "Express", "MongoDB", "Socket.io"]
    },
    {
      title: "Companies Profiling",
      description: "Design & Development",
      imgUrl: projImg5,
      link: "https://www.kcaa.pk/",
      tags: ["React", "PHP", "Laravel", "MySQL"]
    },
    {
      title: "Daily News , Articles",
      description: "Design & Development",
      imgUrl: projImg6,
      link: "https://mirrorspectator.com/",
      tags: ["React", "WordPress API", "Redux"]
    },
  ];
  const Secondprojects = [
    {
      title: "Real Estate Application",
      description: "Design & Development",
      imgUrl: projImg7,
      link: "https://liqa.com.sa/",
      tags: ["React Native", "Node.js", "MongoDB", "Google Maps"]
    },

    {
      title: "Company Website",
      description: "Design & Development",
      imgUrl: projImg8,
      link: "https://reacta-pp.vercel.app/",
      tags: ["React", "Tailwind CSS", "Animate.css"]
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
                  orders, and CRM using React and Node.js. Developed an ecommerce marketplace supporting multiple vendors and secure payments with React and Laravel.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Apps & Designs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">SEO & Performance</Nav.Link>
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
                      <div className="seo-dashboard animate__animated animate__fadeInUp">
                        <div className="seo-header text-center">
                          <h3>SEO & Web Speed Metrics</h3>
                          <p>Delivering high-ranking, user-friendly solutions by merging technical excellence with SEO best practices.</p>
                        </div>
                        <Row className="justify-content-center mt-5">
                          <Col lg={4} md={6} sm={12} className="mb-4">
                            <div className="seo-card">
                              <div className="seo-card-header d-flex justify-content-between align-items-center">
                                <h4>Lighthouse Score</h4>
                                <span className="seo-badge success">Perfect</span>
                              </div>
                              <div className="seo-radial-container">
                                <svg viewBox="0 0 36 36" className="seo-circular-chart">
                                  <path className="circle-bg"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                  />
                                  <path className="circle"
                                    strokeDasharray="99, 100"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                  />
                                  <text x="18" y="20.35" className="percentage">99</text>
                                </svg>
                              </div>
                              <div className="seo-stats d-flex justify-content-around">
                                <div className="seo-stat"><span>LCP</span><strong>0.8s</strong></div>
                                <div className="seo-stat"><span>FID</span><strong>11ms</strong></div>
                                <div className="seo-stat"><span>CLS</span><strong>0.01</strong></div>
                              </div>
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={12} className="mb-4">
                            <div className="seo-card">
                              <div className="seo-card-header d-flex justify-content-between align-items-center">
                                <h4>Organic Growth</h4>
                                <span className="seo-badge success">+180%</span>
                              </div>
                              <div className="seo-chart-mock">
                                <svg viewBox="0 0 100 40" className="sparkline">
                                  <path d="M0,35 Q15,30 30,15 T60,20 T90,5 T100,2" fill="none" stroke="url(#sparkline-grad)" strokeWidth="3" strokeLinecap="round" />
                                  <defs>
                                    <linearGradient id="sparkline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                      <stop offset="0%" stopColor="#AA367C" />
                                      <stop offset="100%" stopColor="#4A2FBD" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>
                              <p className="seo-card-desc">Boosted monthly organic search volume by 180% within 6 months using dynamic schema markup, advanced SEO indexing, and core web vitals optimization.</p>
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={12} className="mb-4">
                            <div className="seo-card">
                              <div className="seo-card-header d-flex justify-content-between align-items-center">
                                <h4>Top Rankings</h4>
                                <span className="seo-badge highlight">Top #3</span>
                              </div>
                              <div className="seo-keyword-grid">
                                <div className="keyword-item d-flex justify-content-between"><span>"b2b marketplace"</span> <strong>#1 Rank</strong></div>
                                <div className="keyword-item d-flex justify-content-between"><span>"clothing rentals"</span> <strong>#2 Rank</strong></div>
                                <div className="keyword-item d-flex justify-content-between"><span>"pakistan school portal"</span> <strong>#1 Rank</strong></div>
                                <div className="keyword-item d-flex justify-content-between"><span>"erp inventory react"</span> <strong>#3 Rank</strong></div>
                              </div>
                              <p className="seo-card-desc">Dominating competitive keywords in highly saturated search niches using localized targeting and metadata structure tuning.</p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  )
}
