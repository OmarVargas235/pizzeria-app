import { combineReducers } from 'redux';

// import userSlice from './reducerUser';
// import reducerSnack from './reducerSnack';
import reducerBlockUI from './reducerBlockUI';
// import reducerAlertDialog from './reducerAlertDialog';
// import openLayautAppSlice from './reducerOpenLayautApp';

const rootReducer = combineReducers({
    blockUI: reducerBlockUI,
    // user: userSlice,
    // snack: reducerSnack,
    // alertDialog: reducerAlertDialog,
    // isOpenNabvarLeft: openLayautAppSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;