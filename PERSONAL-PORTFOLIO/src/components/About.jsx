import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

const About = () => {
	return (
		<section className="about" id="about">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={12} xl={8}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? "animate__animated animate__lightSpeedInRight" : ""}>
									<h2>About Me</h2>
									<p>
                                        I'm a self-taught full-stack web developer who has completed
										the Software Engineer Track by Springboard Academy. <br/>
                                        In my time in this
										field, I've learned to maximize my critical thinking and
										problem-solving skills.  
                                        I'm always looking for <br/>ways to expand my
										skillset and enhance my professional competency, and I'm eager to take
										on new challenges that allow me to do so.  
                                        Outside of work, I enjoy
										going on adventurous journeys that test my limits and help me stay
										fit. I believe that challenging yourself physically can help you grow
										mentally, and I try to incorporate this mindset into both my personal
										and professional life.  <br/> <br/>
                                        If you're interested in learning more about my
										work or connecting with me, feel free to reach out. I'm always happy
										to chat!
									</p>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default About;
