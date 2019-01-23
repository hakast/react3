import React, {Component} from 'react';
import {Form, Input} from 'antd';
import querystring from 'querystring';
import axios from 'axios';
import { Alert, Col, Row, Button, FormGroup } from 'reactstrap';

import '../styles/style.scss';
import 'antd/dist/antd.css';

const { TextArea } = Input;

class WrappedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      mail: '',
      msg: '',
      visible: false,
    };
    this.onDismiss = this.onDismiss.bind(this);

  }

  onDismiss() {
    this.setState({ visible:false });
  }

  handleSubmit = (event) => {
    event.preventDefault();

  // axios.post('http://hakvik.se/react3/#/src/api/index.php/?/user',
  axios.post('http://localhost/myProjects/react3/src/api/index.php/?/user',
      querystring.stringify({
          fname: this.state.fname,
          lname: this.state.lname,
          mail: this.state.mail,
          msg: this.state.msg
        })
    )

    .catch(function (error) {
    console.log(error);
  });

        console.log(this.state.fname)
        if(this.state.fname &&
          this.state.lname &&
          this.state.mail &&
          this.state.msg !== ''){

          this.setState({ visible:true });
        }
  }

  render() {
    const name = ['Namn: ' + this.state.fname + ' ' + this.state.lname];
    const mail = ['Mailadress: ' + this.state.mail];
    const msg = ['Meddelande: ' + this.state.msg]

return (
<div>

  <div>
    <Alert
      style={{
        width: '344px',
        position: 'fixed',
        left: '670px',
        top: '100px',
        zIndex: '4'

     }}
      color="info"
      isOpen={this.state.visible}
      toggle={this.onDismiss}
      >
      <h4 className="alert-heading">Tack för feedback!</h4>
      <p>
        Dessa uppgifter har sparats i databasen:
      </p>
      <hr />
      {name}
      <br />
      {mail}
      <hr />
      {msg}
      {/* <p className="mb-0">
      </p> */}
    </Alert>
  </div>

<Form className = "form"
  onSubmit={this.handleSubmit}>
  <Row>
    <Col md={10}>
  <FormGroup>
    <Input
      style={{ width: '250px' }}
      onChange={event => this.setState({fname: event.target.value})}
      addonBefore="Förnamn    "
      type="text"
      size="large"
      name="fname"
      id="exampleAddress"
    />
  </FormGroup>

  <FormGroup>
    <Input
      style={{ width: '250px' }}
      onChange={event => this.setState({lname: event.target.value})}
      addonBefore="Efternamn"
      type="text"
      size="large"
      name="lname"
      id="exampleAddress"
    />
  </FormGroup>

</Col>
</Row>

  <Row >
  <Col md={10}>
    <FormGroup>
      <Input
        style={{ width: '250px' }}
        onChange={event => this.setState({mail: event.target.value})}
        addonBefore="Email"
        type="email"
        size="large"
        name="mail"
        id="exampleEmail"
      />
    </FormGroup>
  </Col>
</Row>

<FormGroup row
  style={{ width: "335px" }} >
 <Col md={10}>
   <TextArea
     onChange={event => this.setState({msg: event.target.value})}
     rows={5}
     width="500px"
     type="textarea"
     name="msg"
     id="exampleText"
     placeholder="Meddelande"
   />
 </Col>
</FormGroup>


<Button color="success" type="submit" >Skicka</Button>

</Form>
</div>
    )
  }
}

export default WrappedForm;
