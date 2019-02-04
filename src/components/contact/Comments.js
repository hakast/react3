import React, {Component} from 'react';
import '../../styles/style.scss';
import {connect} from 'react-redux';
import constants from '../../redux/constants';

class Comments extends Component {

  render() {

    return (
    <div 
    style={{
      color: 'white',
      fontSize: '19px',
      fontWeight: '400',
      position: 'relative',
      width: '300px',
      left: '420px',
      top: '-500px',
    }}
    >
      <h5 style={{
          color: 'white'
        }}>Kommentera</h5>
      <p style={{
          fontSize: '10px'
        }}>Om du ångrat dig: Klicka på din kommentar för att ta bort den</p>
      <form >
        <textarea style={{
            color: '#0C3C60',
            borderRadius: '5px',
            paddingLeft: '10px',
            width: '300px'
          }} value={this.props.inputText} onChange={this.props.inputChange}></textarea>

        <button className="postButton" style={{
            color: 'white'
          }} onClick={this.props.submit}>Posta
        </button>

      </form>
      <ul>
        {
          this.props.items.map((item, index) => {
            return <p className="commentList"> <li key={index} onClick={() => this.props.itemDelete(index)}>{item} </li> </p>
          })
        }
      </ul>
    </div>)
  }
};

function mapStateToProps(state) {
  return {inputText: state.inputText, items: state.items};
}

function mapDispatchToProps(dispatch) {
  return {
    inputChange: (evt) => {
      const action = {
        type: constants.CHANGE_INPUT_TEXT,
        text: evt.target.value
      }
      dispatch(action);
    },

    submit: (evt) => {
      evt.preventDefault();
      const action = {
        type: constants.ADD_ITEM
      };
      dispatch(action);
    },

    itemDelete: (index) => {
      const action = {
        type: constants.DELETE_ITEM,
        index: index
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
