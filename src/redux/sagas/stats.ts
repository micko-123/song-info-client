import { getOverAllStatsAPI } from "../../apis/index";

import { getOverAllStats } from "../slice/stats";
import { GET_OVERALL_STATS } from "../types";

import { put, takeEvery } from "redux-saga/effects";

export function* getStatsSaga() {
  const stats = yield getOverAllStatsAPI();
  console.log(`from sata ${stats}`);
  yield put(getOverAllStats(stats.data));
}

export function* watchStatsAsync() {
  yield takeEvery(GET_OVERALL_STATS, getStatsSaga);
}
