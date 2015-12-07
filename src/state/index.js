import { combineReducers } from 'redux';

import transport from './transport';
import loading from './loading';

export default combineReducers({
	transport,
	loading
});
