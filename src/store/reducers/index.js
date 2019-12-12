import {combineReducers} from 'redux';
import navigationList from './navigation/reducer_navigation';
import Authreducer from './authentication/auth-reducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

export default combineReducers({
    navigationList : navigationList,            
    auth : Authreducer,
    firebase : firebaseReducer,
    firestore : firestoreReducer
});