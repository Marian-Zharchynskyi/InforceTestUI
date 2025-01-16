import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk';
import userReducer from '../store/state/reduserSlises/userSlice'
import appSettingSlice from '../store/state/reduserSlises/appSettingSlice';
import roleReducer from '../store/state/reduserSlises/roleSlice'
import urlReducer from '../store/state/reduserSlises/urlSlice'

export const rootReducer = combineReducers({
    user: userReducer,
    role: roleReducer,
    appSettings: appSettingSlice,
    url: urlReducer
  });

  export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})