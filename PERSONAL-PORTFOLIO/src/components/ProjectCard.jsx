import { Col } from "react-bootstrap";

const ProjectCard = ({ project }) => {
	return (
		<Col sm={16} lg={4} className="my-auto" style={{ height: "1200px" }}>
			<div className="proj-imgbx">
				<img src={project.imgUrl} />
				<div className="proj-txtx">
					<h4>{project.title}</h4>
					<span>{project.description}</span>
				</div>
			</div>
		</Col>
	);
};

export default ProjectCard;
