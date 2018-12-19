import { createStore } from 'redux';
import constants from './constants';

const initialState = {
  project: false,
  services: false,
  projects: false,
  clients: false,
  inputText: '',
  items: []
}

const reducer = (state = initialState, action) => {
  console.log('state in reducer =', state)

  switch (action.type) {
    case constants.BOKA_TID:
    return Object.assign({}, state, { project: true }
    );

    case constants.READ_MORE_SERVICES:
    return Object.assign({}, state, { services: true }
    );

    case constants.READ_MORE_PROJECTS:
    return Object.assign({}, state, { projects: true }
    );

    case constants.READ_MORE_CLIENTS:
    return Object.assign({}, state, { clients: true }
    );

    case constants.CHANGE_INPUT_TEXT:
    return Object.assign({}, state, { inputText: action.text}
    );

    case constants.ADD_ITEM:
    return Object.assign({}, state, {
      items: state.items.concat(state.inputText),
      inputText: ''
    });

    case constants.DELETE_ITEM:
    const copyOfItems = state.items.slice();
    copyOfItems.splice(action.index, 1);
    return Object.assign({}, state, { items: copyOfItems }
    );

    default:
    return state;
  }
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
