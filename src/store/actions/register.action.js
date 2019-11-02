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

export const phoneNumber = number => ({
  type: PHONE_NUMBER,
  payload: number,
});

export const participant = participant => ({
  type: PARTICIPANT,
  payload: participant,
});

export const firstName = fname => ({
  type: FIRST_NAME,
  payload: fname,
});

export const lastName = lname => ({
  type: LAST_NAME,
  payload: lname,
});
export const linkedIn = linkedin => ({
  type: LINKEDIN,
  payload: linkedin,
});
export const email = email => ({
  type: EMAIL,
  payload: email,
});
export const club = club => ({
  type: CLUB,
  payload: club,
});
export const department = dept => ({
  type: DEPARTMENT,
  payload: dept,
});
export const school = sch => ({
  type: SCHOOL,
  payload: sch,
});
export const affiliation = aff => ({
  type: AFFILIATION,
  payload: aff,
});
