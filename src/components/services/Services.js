import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import {Button, Card, Col, Row} from 'antd';
import Footer from '../Footer';
import service1 from '../../images/service1.jpg';
import service2 from '../../images/service2.jpg';
import service3 from '../../images/service3.jpg';
import { connect } from 'react-redux';
import constants from '../../redux/constants';

import '../../styles/style.scss';


class Services extends Component {

  componentDidMount() {
  window.scrollTo(0, 0)
  // window.location.reload();
}

  render() {
    if(this.props.project) {
      return <Redirect to="/Calendar" push={false} />
    }

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
          }}>TJÄNSTER</p>
          <p className="textFrontpage"
            style={{
            width: '700px',
            color: '#6EA4CA',
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
              headStyle={{ color: '#0C3C60', backgroundColor: 'white' }}
              bodyStyle={{ color: '#0C3C60', backgroundColor: 'white', height: '400px' }}
              className="cardServices" title="PROJECT MANAGEMENT" bordered={true}
              >
                <img src={service1}
                  alt={'test'}
                  style={{
                    width: '100%',
                    paddingBottom: '20px'
                   }}
                />

                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean id metus id velit ullamcorper pulvinar. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Pellentesque habitant morbi.
                <Button
                  onClick={this.props.gotoCal}
                  style={{ backgroundColor: '#6EA4CA' }}
                  className="cardButtonService"
                  type="primary"
                  >
                  Boka tid
                </Button>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              headStyle={{ color: '#0C3C60', backgroundColor: 'white' }}
              bodyStyle={{ color: '#0C3C60', backgroundColor: 'white', height: '400px' }}
              className="cardServices" title="CORPORATE STRATEGY" bordered={true}
              >
                <img src={service2}
                  alt={''}
                  style={{
                    width: '100%',
                    paddingBottom: '20px'
                   }}
                />
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean id metus id velit ullamcorper pulvinar. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Pellentesque habitant morbi.
                <Button
                  onClick={this.props.gotoCal}
                  style={{ backgroundColor: '#6EA4CA' }}
                  className="cardButtonService"
                  type="primary"
                  >
                  Boka tid
                </Button>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              headStyle={{ color: '#0C3C60', backgroundColor: 'white' }}
              bodyStyle={{ color: '#0C3C60', backgroundColor: 'white', height: '400px' }}
              className="cardServices" title="OPERATIONAL CONSULTING" bordered={true}
              >
                <img src={service3}
                  alt={''}
                  style={{
                    width: '100%',
                    paddingBottom: '20px'
                   }}
                />

                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean id metus id velit ullamcorper pulvinar. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Pellentesque habitant morbi.
              <Button
                onClick={this.props.gotoCal}
                style={{ backgroundColor: '#6EA4CA' }}
                className="cardButtonService"
                type="primary"
                >
                Boka tid
              </Button>
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

function mapStateToProps(state) {
  // console.log('mapstate...osv', state)
  return {
    project: state.project
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gotoCal: (e) => {
      console.log('click contact with action')
    const action = { type: constants.BOKA_TID};
    dispatch(action);
    window.location.reload();
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Services));
