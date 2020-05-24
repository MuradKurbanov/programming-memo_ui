import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Content } from "./reducers/content/reducer";
import { Common } from "./reducers/common/reducer";

const rootReducer = combineReducers({
  Content,
  Common,
});

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;