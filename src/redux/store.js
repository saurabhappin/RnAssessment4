import thunk from 'redux-thunk';
import {addressReducer, contactsReducer, userReducer} from './Reducer';
import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  fetchUsersData: contactsReducer,
  fetchSingleUserData: userReducer,
  fetchAddressData: addressReducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
