import uiReducer from './ui/ui.reducer';
import authReducer from './auth/auth.reducer';
import userReducer from './user/user.reducer';
import folderReducer from './folder/folder.reducer';

const reducers = {
  ui: uiReducer,
  auth: authReducer,
  user: userReducer,
  folder: folderReducer,
};

export default reducers;
