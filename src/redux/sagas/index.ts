import { all } from "redux-saga/effects";
import { watchSongsAsync } from "./song";
import { watchStatsAsync } from "./stats";

export function* rootSaga() {
    yield all([watchSongsAsync(), watchStatsAsync()]);
}