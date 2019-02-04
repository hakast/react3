import React, { Component } from 'react';
import '../styles/style.scss';

class ContactDetails extends Component {

render() {

   return(
        <pre className="formAddress"
        style={{
          color: 'white',
          fontSize: '10px',
          fontWeight: '400',
          position: 'relative',
          width: '300px',
          left: '100px',
          top: '80px',
        }}
        >
          Håkan Åström <br />
          Hammarby allé 119 <br />
          120 64 Stockholm <br />
          hakast@gmail <br />
          070-444 64 39
        </pre>


       );
     }

};
export default ContactDetails;
