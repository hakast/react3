import React, { Component } from 'react';
import {Layout} from 'antd';
import '../styles/style.scss';

class Footer extends Component {
   render() {

   return(
     <Layout className="footer"
       style={{ backgroundColor: '#0C3C60' }}>
      © 2018 Proudly presented by Håkan Åström
     </Layout>
    );
  }
};
export default Footer;
