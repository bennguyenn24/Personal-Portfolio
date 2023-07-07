import { Container, Row, Nav, Col, Tab } from "react-bootstrap";
import sampleproject1 from "../img/sampleproject1.jpg";
import ProjectCard from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen'

const Projects = () => {
	const projects = [
		{
			title: "Business Startup",
			description: "Design & Development",
			imgUrl: sampleproject1,
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			imgUrl: sampleproject1,
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			imgUrl: sampleproject1,
		},
	];

	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col>
					<TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
						<h2>Projects</h2>
						<p>What I did</p>
						<Tab.Container id="projects-tabs" defaultActiveKey="first">
							<Nav
								variant="pills"
								className="nav-pills mb-5 justify-content-center justify-content-center align-items-center" 
								id="pills-tab">
								<Nav.Item>
									<Nav.Link eventKey="first">SteakHouse Society</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Fitness App</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">Fitness Mobile App</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
								<Tab.Pane eventKey="first">
									<Row>
										{projects.map((project, index) => (
											<ProjectCard key={index} project={project} />
										))}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="second"><p>Philiip</p></Tab.Pane>
								<Tab.Pane eventKey="third"><p>Philiip</p></Tab.Pane>
							</Tab.Content>
						</Tab.Container>
						</div>}
                        </TrackVisibility>
					</Col>
				</Row>
			</Container>
			{/* <img src={sampleproject1}className="background-image-right"/> */}
		</section>
	);
};

export default Projects;
