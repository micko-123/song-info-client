import axios from "axios";
import { Song } from "../types";

axios.defaults.baseURL = "http://localhost:8000/api/v1";

export const getSongsAPI = async () => axios.get("/songs");

export const getSongByIdAPI = async (_id: string) => axios.get(`/songs/${_id}`);

export const createSongAPI = async (song: Song) => axios.post(`/songs`, song);

export const updateSongAPI = async (song: Song) =>
  axios.put(`/songs/${song._id}`, song);

export const deleteSongByIdAPI = async (_id: string) =>
  axios.delete(`/songs/${_id}`);
