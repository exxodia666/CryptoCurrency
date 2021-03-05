import { persistReducer, persistStore } from 'redux-persist'
import { applyMiddleware, createStore } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createEpicMiddleware } from 'redux-observable';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { rootReducer } from './main_reducer';
import { rootEpic } from './main_epic';

const epicMiddleware = createEpicMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  //whitelist: []
  blacklist: ['coins'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(epicMiddleware));
  let persistor = persistStore(store);
  epicMiddleware.run(rootEpic);
  return { store, persistor };
};
