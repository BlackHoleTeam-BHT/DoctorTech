import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import CarouselHome from './CarouselHome';
import '../style/Home.css';
import Footer from './Footer';
import image from '../style/d3.jpg'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { CheckSession } from '../../store/action/authActions'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render() {

    console.log(this.props)
    return (
      <div>
        <div >
          <CarouselHome />
          <div className="second">
            <Container>
              <Row>
                <Col sm="5" xs="12" md="5"><div className="img"> <img src={image} alt="" /> </div></Col>
                <Col xs="12" sm="7" md="7"> <h2 className="who"> What is Doctor Tech</h2>
                  <div> <h2 className="whof">First Medical Website in Middle East and North Africa </h2>
                  <h2 className="whos">
                  Is an e-health platform specialy designed for doctors,that covers the convenience of health care technology 
                  to make work easy for doctors, by controlling manual tasks with efficiency. In addition to taking the advantage
                   of artificial intelligence to assess the health status of patients.</h2>
                  <Button outline color="info">our services</Button>
                  </div>
                 </Col>
              </Row>
              <Row>             
                <Col xs="6" sm="4" className="homeCard">
                <div >
                <Card body inverse style={{ backgroundColor: '#555', borderColor: '#333' }}>
        <CardTitle>Patient Management Automation</CardTitle>
        <CardText className="homeText">Where doctors can add their patients records which have all their details like scheduling their appointmints, treatment plan and track their feedbak and response in order to follow up ther health status</CardText>
        
      </Card>
    </div>
                </Col>
                
                <Col xs="6" sm="4" className="homeCard">
                <div>
                <Card body inverse style={{ backgroundColor: '#555', borderColor: '#333',height:'184px' }}>
        <CardTitle>Boards Of Consultants</CardTitle>
        <CardText className="homeText">Where doctors can send for each other an advisory opinion in order to help them with medical diagnosis</CardText>
        
      </Card>
    </div>
                </Col>
  
                
                <Col xs="6" sm="4" className="homeCard">
                <div >
                <Card body inverse style={{ backgroundColor: '#555', borderColor: '#333' }}>
        <CardTitle>Disease Prediction System</CardTitle>
        <CardText className="homeText">Intuitive "disease prediction system" this is what makes our application stand out than other health care platforms, by using the power of AI and machine learning to assess health status of patients</CardText>
        
      </Card>
    </div>
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


// map dispatch (actions) from reducer to component props
const mapDipatchToProps = (dispatch) => {
  return {
    CheckSession: () => dispatch(CheckSession())
  }
}
// map state from reducer to component props
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    correctLogin: state.auth.correctLogin
  }
}



export default connect(mapStateToProps, mapDipatchToProps)(Home)
