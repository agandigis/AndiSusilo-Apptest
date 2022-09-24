import { ALL_CONTACTS, SINGLE_CONTACT } from "./actionType";
import axios from "axios";

const baseURL = "https://simple-contact-crud.herokuapp.com";

export const fetchAllContactSuccess = (payload) => {
  return {
    type: ALL_CONTACTS,
    payload,
  };
};

export const fetchAllContacts = () => {
  return async (dispatch, getState) => {
    try {
      let response = await axios.get(`${baseURL}/contact`);

      dispatch(fetchAllContactSuccess(response.data.data));
    } catch (err) {
      console.log("err");
    }
  };
};

export const fetchSingleContactSuccess = (payload) => {
  return {
    type: SINGLE_CONTACT,
    payload,
  };
};

export const fetchSingleContact = (id) => {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.get(`${baseURL}/contact/${id}`);

        dispatch(fetchSingleContactSuccess(response.data.data));
        resolve(response.data.data);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const createContact = (credential) => {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        const resp = await axios.post(`${baseURL}/contact`, credential);
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const deleteContact = (id) => {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        //dibagian ini apakah ada error dari server?
        //soalnya saya hit di API docs juga error 400
        const resp = await axios.delete(`${baseURL}/contact/${id}`);
        resolve();
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  };
};

export const updateContact = (credential, id) => {
  credential.age = Number(credential.age);

  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        const resp = await axios.put(`${baseURL}/contact/${id}`, credential);
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  };
};
