import React, {Component} from 'react';
import Footer from '../Footer';

import '../../styles/style.scss';


class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // project: false,
        // corporate: false,
        // operational: false
    };
  }
  componentDidMount() {
  window.scrollTo(0, 0)
}

  render() {

    // const { project } = this.state
    // const { corporate } = this.state
    // const { operational } = this.state

    // if(project) {
    //   return <Redirect to="/Calendar" push={true} />
    // }

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
          }}>KLIENTER</p>
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
       <div
         style={{
           textAlign: 'center'
           }}
         >
           <img src={require('../../images/clients.jpg')}
           alt={''}
         />
       </div>

      <div>
        <Footer/>
      </div>

    </div>
  )
  }
};
export default Clients;
