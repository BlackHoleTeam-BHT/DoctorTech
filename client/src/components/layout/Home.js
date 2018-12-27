import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap';
import CarouselHome from './CarouselHome';
import '../style/Home.css';
import Footer from './Footer';
import image from '../style/d3.jpg'
import image2 from '../style/d4.jpg'
class Home extends React.Component {
  render() {
    return (
      <div>
        <div >
          <CarouselHome />
          <div className="second">
            <Container>
              <Row>
                <Col xs="6" sm="8"> <h2 className="who"> Who We Are</h2>
                  <h2 className="whof">Welcome to Physio Therapy
                 & Chiroparctor Clinic</h2>
                  <h2 className="whos">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                    sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipiscil. sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam</h2>
                  <Button outline color="info">our services</Button></Col>
                <Col sm="4"><div className="img"> <img src={image} /> </div></Col>
              </Row>
            </Container>
            </div>
            <div className="last">
              <Container>
                <Row>
              <Col sm="3" > <img src={image2} /></Col>
              <Col sm="9">
              <h2>
              Why Choose Us</h2>
                <h2> We Proudly give quality, thorough chiropractic to the group and the encompassing regions.
                Chiropractic mind is the act of utilizing spinal arrangement to ease a wide assortment of physical infirmities, including muscle strain, neck torment, endless back torment, and then some.
              </h2>
              </Col>
              </Row>
              </Container>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Home
