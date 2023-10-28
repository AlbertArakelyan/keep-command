import uiReducer from './ui/ui.reducer';
import authReducer from './auth/auth.reducer';
import userReducer from './user/user.reducer';

const reducers = {
  ui: uiReducer,
  auth: authReducer,
  user: userReducer,
};

export default reducers;
