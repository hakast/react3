import React, {Component} from 'react';
import {Card, Col, Row} from 'antd';
import Footer from '../Footer';
import project2 from '../../images/project2.jpg';
import project3 from '../../images/project3.jpg';
import project4 from '../../images/project4.jpg';

// import 'antd/dist/antd.css';
import '../../styles/style.scss';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
        project: false,
        // corporate: false,
        // operational: false
    };
  }
  componentDidMount() {
  window.scrollTo(0, 0)
}

  render() {

    return (
      <div  style={{
          paddingTop: '100px',
          margin: 'auto',
          backgroundColor: 'white'
        }}>
        <div>
          <p
            style={{
            color: '#6EA4CA',
            letterSpacing: '3.5px',
            fontSize: '4.5rem',
            fontWeight: '300',
            textAlign: 'center'
          }}>PROJEKT</p>
          <p className="textFrontpage"
            style={{
            width: '700px',
            color: '#6EA4CA',
            // letterSpacing: '2.5px',
            fontFamily: 'Verdana',
            lineHeight: '1.5em',
            fontSize: '1.0rem',
            fontWeight: '500',
            margin: 'auto',
            paddingBottom: '50px',

           }}
           >
             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean id metus id velit ullamcorper pulvinar. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Pellentesque habitant morbi tristique.
         </p>
       </div>
      <Row gutter={16}>
        <div style={{
          width: '1100px', margin: 'auto', paddingTop: '30px'}}
          >

          <Col span={8}>
            <Card
              headStyle={{ color: 'white', backgroundColor: '#0C3C60' }}
              bodyStyle={{ color: 'white', backgroundColor: '#0C3C60', height: '350px' }}
              className="cardServices" title="PROJEKT 1" bordered={true}
              >
                <img src={project2}
                  alt={''}
                  style={{
                    width: '100%',
                    paddingBottom: '20px'
                   }}
                />

                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean id metus id velit ullamcorper pulvinar. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Pellentesque habitant morbi.
            </Card>
          </Col>

          <Col span={8}>
            <Card
              headStyle={{ color: 'white', backgroundColor: '#0C3C60' }}
              bodyStyle={{ color: 'white', backgroundColor: '#0C3C60', height: '350px' }}
              className="cardServices" title="PROJEKT 2" bordered={true}
              >
                <img src={project3}
                  alt={''}
                  style={{
                    width: '100%',
                    paddingBottom: '20px'
                   }}
                />

                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean id metus id velit ullamcorper pulvinar. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Pellentesque habitant morbi.
            </Card>
          </Col>

          <Col span={8}>
            <Card
              headStyle={{ color: 'white', backgroundColor: '#0C3C60' }}
              bodyStyle={{ color: 'white', backgroundColor: '#0C3C60', height: '350px' }}
              className="cardServices" title="PROJEKT 3" bordered={true}
              >
                <img src={project4}
                  alt={''}
                  style={{
                    width: '100%',
                    paddingBottom: '20px'
                   }}
                />

                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean id metus id velit ullamcorper pulvinar. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Pellentesque habitant morbi.
            </Card>
          </Col>

        </div>
      </Row>

      <div>
        <Footer/>
      </div>

    </div>)
  }
};
export default Projects;
