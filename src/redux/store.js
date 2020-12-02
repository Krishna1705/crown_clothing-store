import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

//use of redux-persist
import {persistStore} from 'redux-persist';
//use of redux-thunk
import thunk from 'redux-thunk';

const middlewares=[thunk];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store=createStore(rootReducer,applyMiddleware(...middlewares));

export const persistor=persistStore(store);
 // eslint-disable-next-line
export default {store,persistor};
