import React, {Component} from 'react';
// import {  Row} from 'antd';
import Map from '../Map';
import ContactDetails from '../ContactDetails';
import WrappedForm from '../Form';
import Comments from './Comments';
import Footer from '../Footer';
import 'antd/dist/antd.css';
import '../../styles/style.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  window.scrollTo(0, 0)
}

  render() {

    return (
      <div  style={{
          width: '100%',
          margin: 'auto',
          backgroundColor: 'lightGray'
        }}>

        <p style={{
          fontSize: '5vw',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          // left: '100px',
          top: '150px'
         }}>
          Kontakt och kommentarer
        </p>

      <div className="contactFrontpage">
        <WrappedForm/>
        <Comments />
        <ContactDetails/>
        <Map/>
        <Footer/>
      </div>

    </div>)
  }

};

export default Contact;
