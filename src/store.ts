import { configureStore } from "@reduxjs/toolkit";
import song from "./redux/slice/song";
import songs from "./redux/slice/songs";
import stats from "./redux/slice/stats";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./redux/sagas";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    song,
    songs,
    stats,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
