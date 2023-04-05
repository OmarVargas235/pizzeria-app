import { combineReducers } from 'redux';

import userSlice from './reducerUser';
import reducerBlockUI from './reducerBlockUI';
import openNavbarSlice from './reducerOpenNavbar';
import alert from './reducerAlert';
import theme from './reducerTheme';

const rootReducer = combineReducers({
    user: userSlice,
    blockUI: reducerBlockUI,
    isOpenNavbar: openNavbarSlice,
    alert,
    theme,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;