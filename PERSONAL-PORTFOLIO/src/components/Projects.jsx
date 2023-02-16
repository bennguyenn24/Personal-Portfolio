import { Container, Row, Nav, Col, Tab } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
import sampleproject1 from "../img/sampleproject1.jpg";
import ProjectCard from "./ProjectCard";

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
						<h2>Projects</h2>
						<p>What I did</p>
						<Tab.Container id="projects-tabs" defaultActiveKey="first">
							<Nav
								variant="pills"
								className="nav-pills mb-5 justify-content-center align-items-center "
							>
								<Nav.Item>
									<Nav.Link eventKey="first">Tab One</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Tab Two</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">Tab Three</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<Row>
										{projects.map((project, index) => (
											<ProjectCard key={index} project={project} />
										))}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="second">Philiip</Tab.Pane>
								<Tab.Pane eventKey="third">Philiip</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
			{/* <img src={sampleproject1}className="background-image-right"/> */}
		</section>
	);
};

export default Projects;
