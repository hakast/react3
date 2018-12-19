import React, {Component} from 'react';
import {
  Card,
  CardGroup,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from 'mdbreact';
// import {Button, Card, Col, Row} from 'antd';
import Footer from '../Footer';
import about1 from '../../images/about1.jpg';
import about2 from '../../images/about2.jpg';
import about3 from '../../images/about3.jpg';
import about4 from '../../images/about4.jpg';

import '../../styles/style.scss';

class About extends Component {

    componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (<div style={{
        paddingTop: '100px',
        margin: 'auto',
        backgroundColor: 'white'
      }}>
      <div>
        <p style={{
            color: '#6EA4CA',
            letterSpacing: '3.5px',
            fontSize: '4.5rem',
            fontWeight: '300',
            textAlign: 'center'
          }}>OM</p>
        <p className="textFrontpage" style={{
            width: '700px',
            color: '#6EA4CA',
            fontFamily: 'Verdana',
            lineHeight: '1.5em',
            fontSize: '1.0rem',
            fontWeight: '500',
            margin: 'auto',
            paddingBottom: '50px'
          }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean id metus id velit ullamcorper pulvinar. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Pellentesque habitant morbi tristique.
        </p>
      </div>

      <CardGroup style={{
        width: '1100px',
        margin: 'auto',
        paddingTop: '30px'
      }}>

        <Card>
          <CardImage
            className="cardImage"
            src={about1}
            alt="Card image cap"
            overlay="white-slight"
          />
          <CardBody style={{ textAlign: 'center' }}>
            <CardTitle tag="h5">Adam | Grundare</CardTitle>
            <CardText >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean id metus id velit ullamcorper pulvinar.
            </CardText>
          </CardBody>
        </Card>

        <Card>
          <CardImage
            className="cardImage"
            src={about2} alt="Card image cap" overlay="white-slight"/>
          <CardBody>
            <CardTitle tag="h5">Berta | Projektledning</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>

        <Card>
          <CardImage
            className="cardImage"
            src={about3} alt="Card image cap" overlay="white-slight"/>
          <CardBody>
            <CardTitle tag="h5">Cissi | Ekonomi</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>

        <Card>
          <CardImage
            className="cardImage"
            src={about4} alt="Card image cap" overlay="white-slight"/>
          <CardBody>
            <CardTitle tag="h5">Dan | Försäljning</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>

      </CardGroup>

      <div>
        <Footer/>
      </div>

    </div>)
  }
};
export default About;
