import axios from 'axios';

export const getContacts = () => {
  //API hit
  return dispatch => {
    axios
      .get('https://random-data-api.com/api/v2/users?size=10')
      .then(response => {
        const users = response.data;
        dispatch({
          type: 'getContacts',
          data: users,
        });
      })
      .catch(err => console.log(err));
  };
};

export const getContactDetails = () => {
  //API hit
  return dispatch => {
    axios
      .get('https://random-data-api.com/api/v2/users')
      .then(response => {
        const users = response.data;
        dispatch({
          type: 'getContactDetails',
          data: users,
        });
      })
      .catch(err => console.log(err));
  };
};

export const getAddressDetails = () => {
  //API hit
  return dispatch => {
    axios
      .get('https://random-data-api.com/api/v2/addresses')
      .then(response => {
        const users = response.data;
        dispatch({
          type: 'getAddressDetails',
          data: users,
        });
      })
      .catch(err => console.log(err));
  };
};
