import {createStore, applyMiddleware,compose} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import fbConfig from '../firebase';
export default createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, {attachAuthIsReady: true}),
    )
);

