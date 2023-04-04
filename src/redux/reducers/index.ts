import { combineReducers } from 'redux';

// import userSlice from './reducerUser';
import reducerBlockUI from './reducerBlockUI';
import openNavbarSlice from './reducerOpenNavbar';
import alert from './reducerAlert';

const rootReducer = combineReducers({
    blockUI: reducerBlockUI,
    isOpenNavbar: openNavbarSlice,
    alert,
    // user: userSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;