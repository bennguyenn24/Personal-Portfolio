import { Container, Row, Nav, Col, Tab } from "react-bootstrap";
import './Projects.css'
import sampleproject1 from "../img/sampleproject1.jpg";
import ProjectCard from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen'

const Projects = () => {
	const projects = [
		{
			title: "SteakHouse Society",
			description: "Steakhouse Society is a sophisticated e-commerce application that seamlessly combines the exquisite world of high-end, rare, and luxurious delicacies with the convenience of online shopping. With the integration of Stripe, a trusted and secure payment platform, customers can easily and safely purchase their desired gourmet products. From the finest cuts of steak to other exclusive culinary treasures, users can indulge in unparalleled flavors and have these delicacies delivered right to their doorstep, ensuring a lavish dining experience from the comfort of their own homes. Steakhouse Society with Stripe integration is the epitome of convenience, taste, and luxury.",
			imgUrl: sampleproject1,
		},
		{
			title: "OnlyFitness",
			description: "OnlyFitness is a cutting-edge fitness app that revolutionizes the way gym enthusiasts connect and find workout partners. Utilizing a sophisticated algorithm based on gym time, training schemes, and fitness goals, users can easily pair up with like-minded individuals dedicated to achieving their fitness objectives. Whether it's lifting weights, cardio workouts, or specialized training, OnlyFitness creates the perfect synergy between fitness goals and compatible gym goers. Say goodbye to solo workouts and embark on a motivating journey towards success with your ideal fitness partner.",
			imgUrl: sampleproject1,
		},
		{
			title: "La Reserve",
			description: "La Reserve is a premier booking application that offers users an exceptional experience in selecting and reserving the most luxurious hotels and resorts across the globe. With a user-friendly interface, it allows customers to effortlessly choose their desired check-in and check-out dates, granting access to an extensive collection of opulent accommodations. From breathtaking cityscapes to tranquil beachfronts, La Reserve caters to the discerning traveler's desire for unparalleled luxury and ensures a seamless booking process.",
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
							</Nav>
							<Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
								<Tab.Pane eventKey="first">
									<Row>
										{projects.map((project, index) => (
											<ProjectCard key={index} project={project} />
										))}
									</Row>
								</Tab.Pane>
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
