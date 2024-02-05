import axios from "axios";
import { Song } from "../types";

axios.defaults.baseURL = "http://localhost:8000/api/v1/songs";

export const getSongsAPI = async () => axios.get("/");

export const getSongByIdAPI = async (_id: string) => axios.get(`/${_id}`);

export const createSongAPI = async (song: Song) => axios.post(`/`, song);

export const updateSongAPI = async (song: Song) =>
  axios.put(`/${song._id}`, song);

export const deleteSongByIdAPI = async (_id: string) => axios.delete(`/${_id}`);

export const getOverAllStatsAPI = async () => axios.get("/overAllStats");
