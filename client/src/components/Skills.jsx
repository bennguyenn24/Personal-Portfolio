import { Container, Row, Col } from "react-bootstrap" 
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import expressIcon from '../img/express.svg'
import htmlIcon from '../img/html.svg'
import cssIcon from '../img/css.svg'
import javascriptIcon from '../img/javascript.svg'
import nodeIcon from '../img/nodejs.svg'
import reactIcon from '../img/react.svg'
import sqlIcon from '../img/sql.svg'
import "animate.css";
import TrackVisibility from "react-on-screen";


const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skill">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({ isVisible }) => (
                    <div className={isVisible ? "animate__animated animate__zoomInUp" : ""}>
                    <div className="skill-bx">
                    <h2>
                        Skills
                    </h2>
                    <p>What I Can Do</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={htmlIcon} alt="Image" />
                            <h5>HTML</h5>
                        </div>
                        <div className="item">
                            <img src={cssIcon} alt="Image" />
                            <h5>CSS</h5>
                        </div>
                        <div className="item">
                            <img src={javascriptIcon} alt="Image" />
                            <h5>JavaScript</h5>
                        </div>
                        <div className="item">
                            <img src={reactIcon} alt="Image" />
                            <h5>React</h5>
                        </div>
                        <div className="item">
                            <img src={expressIcon} alt="Image" />
                            <h5>Express</h5>
                        </div>
                        <div className="item">
                            <img src={nodeIcon} alt="Image" />
                            <h5>Node</h5>
                        </div>
                        <div className="item">
                            <img src={sqlIcon} alt="Image" />
                            <h5>SQL/PostGreSQL</h5>
                        </div>
                    </Carousel>
                    </div>
                    </div>
                    )}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}

export default Skills; 