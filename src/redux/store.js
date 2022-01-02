import {createStore} from 'redux';
import reducer from './reducers/index';
//引入开发者工具
import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(reducer, composeWithDevTools());