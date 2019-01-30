import React, {Component} from 'react';
import {Calendar as Kalender} from 'antd';
import Footer from '../Footer';

class Calendar extends Component {
   onSelect(value, mode) {
    console.log(value, mode);
  }

  componentDidMount() {
  window.scrollTo(0, 0)
}

  render()

  {
    return (
      <div>
      <div
        style={{
        marginTop: '150px',
        marginLeft: '20px',
        width: '650px',
        border: '1px solid #d9d9d9',
        borderRadius: 4

      }}
      >
      <Kalender
      //   style={{
      //   paddingTop: '50px';
      //   width: '500px',
      //   height: '400px',
      //   border: '1px solid #d9d9d9',
      //   borderRadius: 4
      // }}

        fullscreen={false}
        // onSelect={onSelect}
      />
    </div>
    <div>
      <Footer />
    </div>

  </div>
  )
  };
}
export default Calendar;
