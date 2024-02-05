import {
  getSongsAPI,
  getSongByIdAPI,
  createSongAPI,
  updateSongAPI,
  deleteSongByIdAPI,
} from "../../apis/index";

import { setSongSlice } from "../slice/song";
import {
  addSongSlice,
  deleteSongSlice,
  editSongSlice,
  getSongsSlice,
} from "../slice/songs";
import {
  CREATE_SONG,
  DELETE_SONG_BY_ID,
  GET_SONGS,
  GET_SONG_BY_ID,
  UPDATE_SONG_BY_ID,
} from "../types";

import { put, takeEvery } from "redux-saga/effects";

export function* getSongsSaga() {
  const songs = yield getSongsAPI();
  yield put(getSongsSlice(songs.data.data.data));
}

export function* getSongByIdSaga(action) {
  yield getSongByIdAPI(action._id);
  yield put(setSongSlice(action._id));
}
export function* createSongSaga(action) {
  const song = yield createSongAPI(action.song);
  console.log(`song from saga ${song}`);
  yield put(addSongSlice(song.data.data.data));
}

export function* updateSongSaga(action) {
  yield updateSongAPI(action.song);
  yield put(editSongSlice(action.song));
}

export function* deleteSongByIdSaga(action) {
  yield deleteSongByIdAPI(action._id);
  yield put(deleteSongSlice(action._id));
}

export function* watchSongsAsync() {
  yield takeEvery(GET_SONGS, getSongsSaga);
  yield takeEvery(GET_SONG_BY_ID, getSongByIdSaga);
  yield takeEvery(CREATE_SONG, createSongSaga);
  yield takeEvery(UPDATE_SONG_BY_ID, updateSongSaga);
  yield takeEvery(DELETE_SONG_BY_ID, deleteSongByIdSaga);
}
