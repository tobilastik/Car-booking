import {
  PHONE_NUMBER,
  PARTICIPANT,
  FIRST_NAME,
  LAST_NAME,
  LINKEDIN,
  EMAIL,
  CLUB,
  DEPARTMENT,
  SCHOOL,
  AFFILIATION,
} from '../types/index';

const initialState = {
  phoneNumber: '',
  participant: '',
  firstName: '',
  lastName: '',
  linkedIn: '',
  email: '',
  club: '',
  department: '',
  school: '',
  affiliation: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PHONE_NUMBER:
      return Object.assign ({}, state, {
        phoneNumber: action.payload,
      });
    case PARTICIPANT:
      return Object.assign ({}, state, {
        participant: action.payload,
      });
    case FIRST_NAME:
      return Object.assign ({}, state, {
        firstName: action.payload,
      });
    case LAST_NAME:
      return Object.assign ({}, state, {
        lastName: action.payload,
      });
    case LINKEDIN:
      return Object.assign ({}, state, {
        linkedIn: action.payload,
      });
    case EMAIL:
      return Object.assign ({}, state, {
        email: action.payload,
      });
    case CLUB:
      return Object.assign ({}, state, {
        club: action.payload,
      });
    case DEPARTMENT:
      return Object.assign ({}, state, {
        department: action.payload,
      });
    case SCHOOL:
      return Object.assign ({}, state, {
        school: action.payload,
      });
    case AFFILIATION:
      return Object.assign ({}, state, {
        affiliation: action.payload,
      });
    default:
      return state;
  }
};
