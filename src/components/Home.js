import React, {Component} from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import {Button, Card, Col, Row} from 'antd';
import Contact from './contact/Contact';
import Scroll from '../images/scrollimg.jpg';
import 'antd/dist/antd.css';
import '../styles/style.scss';
import { connect } from 'react-redux';
import constants from '../redux/constants';


class Home extends Component {

  componentDidMount() {
  window.scrollTo(0, 0)
}

  render() {

    if(this.props.services) {
      return <Redirect to="/Services" push={true} />
    }

    if(this.props.projects) {
      return <Redirect to="/Projects" push={true} />
    }

    if(this.props.clients) {
      return <Redirect to="/Clients" push={true} />
    }

    return (
      <div  style={{
          paddingTop: '55px',
          margin: 'auto',
          backgroundColor: 'white'
        }}>

        <img src={Scroll}
          alt={''}
          style={{
            width: '100%',
            margin: '0px'
          }}
        />
      <Row gutter={16}>
        <div style={{
          maxWidth: '820px', margin: 'auto', paddingTop: '30px'}}
          >
          <Col span={8}>
            <Card
              bodyStyle={{
                color: 'white',
                backgroundColor: '#0C3C60'
               }}
              headStyle={{
                // paddingLeft: '100px',
                color: 'lightGray',
                backgroundColor: '#0C3C60',
                margin: 'auto'
               }}
              className="cardContent"
              title="TJÄNSTER"
              bordered={false}
              >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean id metus id velit ullamcorper pulvinar. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Pellentesque habitant morbi tristique.
              <div>
              <Button
                style={{ backgroundColor: '#6EA4CA' }}
                onClick={this.props.clickServices}
                className="cardButton"
                type="primary">
                Läs mer
              </Button>
            </div>

            </Card>
          </Col>

          <Col span={8}>
            <Card
              bodyStyle={{
                color: 'white',
                backgroundColor: '#0C3C60'
               }}
              headStyle={{
                // paddingLeft: '100px',
                color: 'lightGray',
                backgroundColor: '#0C3C60',
                margin: 'auto'
               }}
              className="cardContent"
              title="PROJEKT"
              bordered={false}
              >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean id metus id velit ullamcorper pulvinar. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Pellentesque habitant morbi tristique.
              <div>
              <Button
                style={{ backgroundColor: '#6EA4CA' }}
                onClick={this.props.clickProjects}
                className="cardButton"
                type="primary">
                Läs mer
              </Button>
              </div>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              bodyStyle={{
                color: 'white',
                backgroundColor: '#0C3C60'
               }}
              headStyle={{
                color: 'lightGray',
                backgroundColor: '#0C3C60',
                margin: 'auto'
               }}
              className="cardContent"
              title="KLIENTER"
              bordered={false}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean id metus id velit ullamcorper pulvinar. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Pellentesque habitant morbi tristique.
              <div>
              <Button
                style={{ backgroundColor: '#6EA4CA' }}
                onClick={this.props.clickClients}
                className="cardButton"
                type="primary">
                Läs mer
              </Button>
              </div>
            </Card>
          </Col>
        </div>
      </Row>

      <Row gutter={16}>
      <div style={{
          backgroundColor: '#D1E0EB',
          maxWidth: '800px',
          margin: 'auto'
        }}>
        <p className="aboutHeader">Site built with state/props, then refactored using Redux</p>
        <p className="textFrontpage">
          Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar.
        </p><br />
        <p className="textFrontpage">
          Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar.
        </p>
        <br />
        <br />
        <br />
      </div>

    </Row>

    {/* <Row gutter={16}>
    <div style={{maxWidth: '800px', margin: 'auto'}}>
    <Contact />
    </div>
    </Row> */}

    </div>)
  }
};

const mapStateToProps = (state) => {
  console.log('mapstate ...', state)
  return{
  services: state.services,
  projects: state.projects,
  clients: state.clients
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clickServices: () => {
      const action = { type: constants.READ_MORE_SERVICES};
      dispatch(action);
      window.location.reload();
    },
    clickProjects: () => {
      const action = { type: constants.READ_MORE_PROJECTS};
      dispatch(action);
      window.location.reload();
    },
    clickClients: () => {
      const action = { type: constants.READ_MORE_CLIENTS};
      dispatch(action);
      window.location.reload();
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
