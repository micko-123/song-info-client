import axios from "axios";
import { Song } from "../types";

axios.defaults.baseURL = "http://localhost:8000/api/v1";

export const getSongsAPI = async () => axios.get("/songs");

export const getSongByIdAPI = async (id: string) => axios.get(`/songs/${id}`);

export const createSongAPI = async (song: Song) => axios.post(`/songs`, song);

export const updateSongAPI = async (song: Song) =>
  axios.put(`/songs/${song.id}`, song);

export const deleteSongByIdAPI = async (id: string) =>
  axios.delete(`/songs/${id}`);
