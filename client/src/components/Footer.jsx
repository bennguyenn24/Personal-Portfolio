import { Col, Container, Row } from "react-bootstrap";
import './Footer.css'
import navIcon1 from '../img/email.svg'
import navIcon2 from '../img/github.svg'
import navIcon3 from '../img/linkedin.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={''} alt="" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1} alt="" /></a>
                            <a href=""><img src={navIcon2} alt="" /></a>
                            <a href=""><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>CopyRight 2022. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;