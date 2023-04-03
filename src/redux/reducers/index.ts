import { combineReducers } from 'redux';

// import userSlice from './reducerUser';
// import reducerSnack from './reducerSnack';
import reducerBlockUI from './reducerBlockUI';
import openNavbarSlice from './reducerOpenNavbar';
// import reducerAlertDialog from './reducerAlertDialog';

const rootReducer = combineReducers({
    blockUI: reducerBlockUI,
    isOpenNavbar: openNavbarSlice,
    // user: userSlice,
    // snack: reducerSnack,
    // alertDialog: reducerAlertDialog,
    // isOpenNabvarLeft: openLayautAppSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;