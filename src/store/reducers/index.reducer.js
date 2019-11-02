import {combineReducers} from 'redux';
import Register from './register.reducer';
import notes from './notes.reducer';
import visibility from './visibility.reducer';

export default combineReducers ({
  register: Register,
  notes,
  visibility,
});
